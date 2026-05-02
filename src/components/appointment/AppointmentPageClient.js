'use client';
import Review from 'components/reviews/review';
import ConsultationCtaClient from 'components/app-pages/ConsultationCtaClient';
import {
  getOrCreateAnalyticsUserId,
  trackAppointmentApiFailure,
  trackAppointmentBooked,
  trackAppointmentPrefillLoaded,
} from 'lib/analytics';
import { APPOINTMENT_FORM_OPTION_VALUES } from 'lib/tools/constants';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppointmentFAQs } from 'components/faq';
import { AppointmentPageFAQItem } from 'components/faq-item';
import { FaCalendarCheck, FaCheckCircle, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

// Utility functions for localStorage
const STORAGE_KEY = 'hapliv_user_details';

const saveUserDetails = (data) => {
  if (typeof window !== 'undefined') {
    try {
      const userDetails = {
        patient_name: data.patient_name || '',
        mobile: data.mobile || '',
        email: data.email || '',
        clinic_location: data.clinic_location || '',
        last_submission: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userDetails));
    } catch (err) {
      console.error('Failed to save user details:', err);
    }
  }
};

const getUserDetails = () => {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const details = JSON.parse(stored);
        // Check if data is less than 90 days old
        const lastSubmission = new Date(details.last_submission);
        const daysSinceSubmission = (new Date() - lastSubmission) / (1000 * 60 * 60 * 24);
        if (daysSinceSubmission < 90) {
          return details;
        }
      }
    } catch (err) {
      console.error('Failed to load user details:', err);
    }
  }
  return null;
};

const VALID_APPOINTMENT = new Set(APPOINTMENT_FORM_OPTION_VALUES);
const VALID_LOCATION = new Set(['Sector 65, Gurugram', 'Mohan Garden, West Delhi']);

function decodeParam(v) {
  if (!v) return '';
  return decodeURIComponent(String(v).replace(/\+/g, ' ')).trim();
}

function guideBannerLabel(slug) {
  const m = {
    invisalign_braces_cost_estimator: 'braces & Invisalign consultation planner',
    tooth_pain_urgency_checker: 'tooth pain urgency guide',
    smile_treatment_matcher: 'smile treatment guide',
    dental_implant_candidacy_checker: 'dental implant consultation planner',
  };
  return m[slug] || 'online planning guide';
}

export default function AppointmentPageClient() {
  const searchParams = useSearchParams();
  const storedDetails = getUserDetails();
  const prefillTrackedRef = useRef(false);
  const prefillMetaRef = useRef({});

  const [patientName, setPatientName] = useState(storedDetails?.patient_name || '');
  const [mobile, setMobile] = useState(storedDetails?.mobile || '');
  const [email, setEmail] = useState(storedDetails?.email || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('');
  const [patientNameError, setPatientNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [preferredDateError, setPreferredDateError] = useState(false);
  const [preferredTimeSlotError, setPreferredTimeSlotError] = useState(false);
  const [appointmentForError, setAppointmentForError] = useState(false);
  const [appointmentFor, setAppointmentFor] = useState('none');
  const [clinicLocation, setClinicLocation] = useState('Sector 65, Gurugram');
  const [prefillBanner, setPrefillBanner] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // 'success' or 'error'
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    if (storedDetails) {
      if (storedDetails.patient_name) setPatientName(storedDetails.patient_name);
      if (storedDetails.mobile) setMobile(storedDetails.mobile);
      if (storedDetails.email) setEmail(storedDetails.email);
      if (storedDetails.clinic_location && VALID_LOCATION.has(storedDetails.clinic_location)) {
        setClinicLocation(storedDetails.clinic_location);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- hydrate once from localStorage snapshot
  }, []);

  // Prefill from query string. Use `window.location.search` on the client so static export
  // / hydration always sees the real URL, and depend on `searchParams.toString()` so the effect
  // re-runs when Next updates the query (the `searchParams` object reference can stay stable).
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const p = new URLSearchParams(window.location.search);
    const guide = p.get('guide') || '';
    const service = decodeParam(p.get('service') || '');
    const location = decodeParam(p.get('location') || '');
    const urgency = p.get('urgency') || '';
    const resultCategory = p.get('result_category') || '';
    const recommendation = p.get('recommendation') || '';

    if (guide && !prefillTrackedRef.current) {
      prefillTrackedRef.current = true;
      prefillMetaRef.current = {
        tool_name: guide,
        result_category: resultCategory || undefined,
        urgency_level: urgency || undefined,
      };
      trackAppointmentPrefillLoaded({
        tool_name: guide,
        result_category: resultCategory || undefined,
        recommended_service: service || undefined,
        location_default: location || 'Sector 65, Gurugram',
        source_page: '/appointment',
      });
    }

    if (guide) {
      const svcLine = service ? `Suggested appointment focus: ${service}.` : '';
      const recLine = recommendation || resultCategory;
      const extra = recLine ? ` Summary from the guide: ${recLine}.` : '';
      setPrefillBanner(
        `You're booking after our ${guideBannerLabel(guide)}. ${svcLine}${extra} You can change anything below.`
      );
    } else {
      setPrefillBanner('');
    }

    if (service && VALID_APPOINTMENT.has(service)) {
      setAppointmentFor(service);
    }
    if (location && VALID_LOCATION.has(location)) {
      setClinicLocation(location);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: re-run when query string changes
  }, [searchParams.toString()]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  const getMinDate = () => {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;     // getMonth() is zero-based
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
      month = '0' + month.toString();
    if (day < 10)
      day = '0' + day.toString();
    var minDate = year + '-' + month + '-' + day;
    return minDate;
  }


  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setLoading(true)
    // Get data from the form.
    const data = {
      patient_name: event.target.patient_name.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      preferred_date: event.target.preferred_date.value,
      preferred_time_slot: event.target.preferred_time_slot.value,
      appointment_for: appointmentFor,
      communication_consent: {
        whatsapp: event.target.communication_consent.checked,
        email: event.target.communication_consent.checked,
        sms: event.target.communication_consent.checked,
        phone: event.target.communication_consent.checked
      },
      clinic_location: clinicLocation,
      analytics_client_id: getOrCreateAnalyticsUserId() || undefined,
    };
    let patientNameError = !(data.patient_name !== '' && data.patient_name);
    let mobileError = !(data.mobile !== '' && data.mobile);
    let emailError = !(data.email !== '' && data.email);
    let preferredDateError = !(data.preferred_date !== '' && data.preferred_date);
    let preferredTimeSlotError = data.preferred_time_slot == 'none';
    let appointmentForError = appointmentFor === 'none';
    setPatientNameError(patientNameError);
    setMobileError(mobileError);
    setEmailError(emailError);
    setPreferredDateError(preferredDateError);
    setPreferredTimeSlotError(preferredTimeSlotError);
    setAppointmentForError(appointmentForError);
    var hasErrors = patientNameError || mobileError || emailError || preferredDateError || preferredTimeSlotError || appointmentForError;
    if (!hasErrors) {
      const JSONdata = JSON.stringify(data);
      const endpoint = 'https://api.haplivdentalclinic.com/appointments';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };

      try {
        const response = await fetch(endpoint, options);
        let result = {};
        try {
          result = await response.json();
        } catch {
          trackAppointmentApiFailure({
            formType: 'appointment_page',
            source: '/appointment',
            errorType: 'parse_error',
            httpStatus: response.status,
          });
          setModalType('error');
          setModalMessage(
            'Your appointment request could not be processed. Please try again or call us at +91 98104 71255.'
          );
          setShowModal(true);
          setLoading(false);
          return;
        }

        if (response.status === 200) {
          const meta = prefillMetaRef.current || {};
          trackAppointmentBooked({
            formType: 'appointment_page',
            source: '/appointment',
            ctaLabel: 'Appointment Page Form',
            location: data.clinic_location,
            value: 500,
            currency: 'INR',
            tool_name: meta.tool_name,
            result_category: meta.result_category,
            urgency_level: meta.urgency_level,
          });
        }

        if (response.status !== 200) {
          trackAppointmentApiFailure({
            formType: 'appointment_page',
            source: '/appointment',
            errorType: 'http_error',
            httpStatus: response.status,
          });
          setModalType('error');
          setModalMessage(`Your appointment request could not be processed. Please try again after correcting ${result.data || 'the errors'}.`);
          setShowModal(true);
          setLoading(false);
        } else if (response.status == 200) {
          saveUserDetails({
            patient_name: data.patient_name,
            mobile: data.mobile,
            email: data.email,
            clinic_location: data.clinic_location,
          });

          setLoading(false);
          setModalType('success');
          setModalMessage('Request Submitted successfully. Please wait for confirmation of your appointment from our team.');
          setShowModal(true);
          event.target.reset();
          setPatientNameError(false);
          setMobileError(false);
          setEmailError(false);
          setPreferredDateError(false);
          setPreferredTimeSlotError(false);
          setAppointmentForError(false);
        }
      } catch {
        trackAppointmentApiFailure({
          formType: 'appointment_page',
          source: '/appointment',
          errorType: 'network',
        });
        setModalType('error');
        setModalMessage(
          'Network error. Please check your connection and try again, or call us at +91 98104 71255.'
        );
        setShowModal(true);
        setLoading(false);
        return;
      }
    } else {
      setModalType('error');
      setModalMessage('Please check and fill all required fields.');
      setShowModal(true);
    }
    setLoading(false);
  }
  return (
      <div className="min-h-screen bg-white">
        <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-b from-white via-primary-lightest/45 to-gray-50 px-4 py-16 md:px-8 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(81,36,122,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(81,36,122,0.026)_1px,transparent_1px)] bg-[size:44px_44px]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-white/35" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-pill border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary shadow-soft">
                <FaCalendarCheck className="h-3.5 w-3.5" aria-hidden />
                Book dental appointment
              </span>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-gray-950 md:text-5xl">
                Schedule your visit at Hapliv Dental Clinic
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
                Share your preferred date, clinic location, and treatment concern. The team will review your request and confirm the appointment slot.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: FaMapMarkerAlt, title: '2 clinics', body: 'Gurgaon and West Delhi' },
                  { icon: FaClock, title: 'Mon-Sat', body: 'Appointment-led care' },
                  { icon: FaCheckCircle, title: 'Clear triage', body: 'Right dentist, right visit' },
                ].map((item) => (
                  <div key={item.title} className="rounded-card border border-primary/10 bg-white p-4 shadow-soft">
                    <item.icon className="h-4 w-4 text-primary" aria-hidden />
                    <p className="mt-3 text-sm font-semibold text-gray-950">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-card border border-white bg-white p-4 shadow-premium md:p-6">
              <div className="mb-6 rounded-card border border-primary/10 bg-primary-lightest/55 p-5">
                <h2 className="text-2xl font-semibold text-gray-950">Appointment details</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Fill this form and schedule your appointment for a healthier smile.
                </p>
              </div>
          {prefillBanner && (
            <div
              className="mb-5 rounded-card border border-primary/20 bg-primary-lightest px-4 py-3 text-sm leading-relaxed text-primary-dark"
              role="status"
            >
              {prefillBanner}
            </div>
          )}
          <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w md:mb-0">
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="patient_name">
                Patient Name*
              </label>
              <input className={`block w-full appearance-none rounded-button border bg-white px-4 py-3 leading-tight text-gray-800 shadow-soft outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 ${patientNameError ? 'border-red-500' : 'border-gray-200'}`} id="patient_name" type="text" placeholder="Firstname Middlename Lastname" />
              {patientNameError ? <p className="mt-2 text-xs text-red-500">Please fill out this field.</p> : null}
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="mobile">
                Phone Number*
              </label>
              <input className={`block w-full appearance-none rounded-button border bg-white px-4 py-3 leading-tight text-gray-800 shadow-soft outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 ${mobileError ? 'border-red-500' : 'border-gray-200'}`} id="mobile" type="tel" placeholder="XXXXXXXXXX" maxLength={10} minLength={10} />
              {mobileError ? <p className="mt-2 text-xs text-red-500">Please fill out this field.</p> : null}
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="email">
                Email*
              </label>
              <input className={`block w-full appearance-none rounded-button border bg-white px-4 py-3 leading-tight text-gray-800 shadow-soft outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 ${emailError ? 'border-red-500' : 'border-gray-200'}`} id="email" type="email" placeholder="patient@example.com" />
              {emailError ? <p className="mt-2 text-xs text-red-500">Please fill out this field.</p> : null}
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="preferred_date">
                Preferred Appointment Date
              </label>
              <input className={`block w-full appearance-none rounded-button border bg-white px-4 py-3 leading-tight text-gray-800 shadow-soft outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 ${preferredDateError ? 'border-red-500' : 'border-gray-200'}`} id="preferred_date" type="date" placeholder="dd-MMM-yyy" min={getMinDate()} />
              {preferredDateError ? <p className="mt-2 text-xs text-red-500">Please select a date.</p> : null}
              {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="preferred_time_slot">
                Preferred Time Slot
              </label>
              <div className="relative">
                <select className={`block w-full appearance-none rounded-button border bg-white px-4 py-3 pr-8 leading-tight text-gray-800 shadow-soft outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 ${preferredTimeSlotError ? 'border-red-500' : 'border-gray-200'}`} id="preferred_time_slot" defaultValue='none'>
                  <option value="none" hidden>Select a time slot</option>
                  <option value='10:00 AM - 10:30 AM'>10:00 AM - 10:30 AM</option>
                  <option value='10:30 AM - 11:00 AM'>10:30 AM - 11:00 AM</option>
                  <option value='11:00 AM - 11:30 AM'>11:00 AM - 11:30 AM</option>
                  <option value='11:30 AM - 12:00 PM'>11:30 AM - 12:00 PM</option>
                  <option value='12:00 PM - 12:30 PM'>12:00 PM - 12:30 PM</option>
                  <option value='12:30 PM - 01:00 PM'>12:30 PM - 01:00 PM</option>
                  <option value='01:00 PM - 01:30 PM'>01:00 PM - 01:30 PM</option>
                  <option value='02:00 PM - 02:30 PM'>02:00 PM - 02:30 PM</option>
                  <option value='02:30 PM - 03:00 PM'>02:30 PM - 03:00 PM</option>
                  <option value='03:00 PM - 03:30 PM'>03:00 PM - 03:30 PM</option>
                  <option value='03:30 PM - 04:00 PM'>03:30 PM - 04:00 PM</option>
                  <option value='04:00 PM - 04:30 PM'>04:00 PM - 04:30 PM</option>
                  <option value='04:30 PM - 05:00 PM'>04:30 PM - 05:00 PM</option>
                  <option value='05:00 PM - 05:30 PM'>05:00 PM - 05:30 PM</option>
                  <option value='05:30 PM - 06:00 PM'>05:30 PM - 06:00 PM</option>
                  <option value='06:00 PM - 06:30 PM'>06:00 PM - 06:30 PM</option>
                  <option value='06:30 PM - 07:00 PM'>06:30 PM - 07:00 PM</option>
                  <option value='07:00 PM - 07:30 PM'>07:00 PM - 07:30 PM</option>
                  <option value='07:30 PM - 08:00 PM'>07:30 PM - 08:00 PM</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              {preferredTimeSlotError ? <p className="mt-2 text-xs text-red-500">Please select a time slot.</p> : null}
            </div>
          </div>
          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="appointment_for">
                Appointment For
              </label>
              <div className="relative">
                <select
                  className={`block w-full appearance-none rounded-button border bg-white px-4 py-3 pr-8 leading-tight text-gray-800 shadow-soft outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 ${appointmentForError ? 'border-red-500' : 'border-gray-200'}`}
                  id="appointment_for"
                  value={appointmentFor}
                  onChange={(e) => setAppointmentFor(e.target.value)}
                >
                  <option value="none" hidden>Select an Option</option>
                  <option value='Complete oral checkup'>Complete oral checkup</option>
                  <option value='Braces Consultation'>Braces Consultation</option>
                  <option value='Invisalign Consultation'>Invisalign Consultation</option>
                  <option value='Laser teeth whitening'>Laser teeth whitening</option>
                  <option value='Kid dental treatment'>Kid's dental treatment</option>
                  <option value='Smile design consultation/Complete oral checkup'>Smile design consultation/Complete oral checkup</option>
                  <option value='Dental Implant Consultation/Complete oral check up'>Dental Implant Consultation/Complete oral check up</option>
                  <option value='Instant Tooth Whitening/Complete oral check up'>Instant Tooth Whitening/Complete oral check up</option>
                  <option value='Wisdom tooth pain/extraction'>Wisdom tooth pain/extraction</option>
                  <option value='Root Canal Treatment/Crowns/Bridge related'>Root Canal Treatment/Crowns/Bridge related</option>
                  <option value='Emergency dental consultation / urgent tooth pain'>Emergency dental consultation / urgent tooth pain</option>
                  <option value='Other dental procedures'>Other dental procedures</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              {appointmentForError ? <p className="mt-2 text-xs text-red-500">Please select the appointment type.</p> : null}
            </div>
          </div>

          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="clinic_location">
                Clinic Location
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded-button border border-gray-200 bg-white px-4 py-3 pr-8 leading-tight text-gray-800 shadow-soft outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  id="clinic_location"
                  value={clinicLocation}
                  onChange={(e) => setClinicLocation(e.target.value)}
                >
                  <option value="none" hidden>Select clinic option</option>
                  <option value='Sector 65, Gurugram'>Sector 65, Gurugram</option>
                  <option value='Mohan Garden, West Delhi'>Mohan Garden, West Delhi</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-card border border-gray-200 bg-gray-50 p-4">
            <input type="checkbox" id="communication_consent" name="communication_consent" required className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <label htmlFor="communication_consent" className="ml-2 text-sm leading-relaxed text-gray-700">I agree to be contacted by Hapliv Dental Clinic over Phone or SMS/Whatsapp/Email.</label>
          </div>
          <div className="flex flex-wrap mt-6 mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w md:mb-0">
              <button className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-button bg-primary px-6 py-4 text-base font-semibold text-white shadow-button transition-all duration-300 hover:bg-primary-dark hover:shadow-button-hover hover:scale-[1.01] active:scale-[0.99]" type="submit" disabled={loading}>
                <FaCalendarCheck className="h-4 w-4" aria-hidden />
                {loading ? 'Submitting request...' : 'Request your appointment'}
              </button>

              <p className="text-center text-sm text-gray-500 md:hidden">Or</p>
              <div className="mb-3 w-full rounded-button border border-primary/20 bg-white px-4 py-3 font-semibold text-primary shadow-soft md:hidden">
                <a href='tel:+919810471255' className='flex justify-center p-2 text-center' rel='nofollow'>
                  <FaPhoneAlt size={20} className='mr-3' /> Call us now
                </a>
              </div>
            </div>
          </div>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-8 lg:py-20">
          <article className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-card border border-gray-100 bg-white p-6 shadow-soft md:p-8">
              <Review />
            </div>
            <div className="space-y-6">
              <section className="rounded-card border border-primary/10 bg-primary-lightest/55 p-6 shadow-soft md:p-8">
                <span className="inline-flex rounded-pill border border-primary/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  Why Hapliv
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-gray-950">Why choose our dental clinic?</h2>
                <ul className="mt-5 grid gap-3">
                  {[
                    'Personalized care from skilled dental professionals.',
                    'Comprehensive services for oral health, orthodontics, implants, and family dentistry.',
                    'Clear appointment follow-up from the clinic team after your request is submitted.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 rounded-card border border-primary/10 bg-white p-4 text-sm leading-relaxed text-gray-800">
                      <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section id="appointment-faqs" className="rounded-card border border-gray-100 bg-white p-6 shadow-soft md:p-8">
                <span className="inline-flex rounded-pill border border-primary/10 bg-primary-lightest px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  FAQs
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-gray-950">Appointment FAQs</h2>
                <div className="mt-5 space-y-3 text-sm">
                  {AppointmentFAQs.faqs.map((faq, idx) => {
                    return <AppointmentPageFAQItem faq={faq} key={idx}></AppointmentPageFAQItem>
                  })}
                </div>
              </section>
            </div>
          </article>
        </section>

        <ConsultationCtaClient
          title="Need help booking your visit?"
          description="Call, WhatsApp, or send an appointment request and the clinic team will help you confirm the right slot."
          ctaLocation="appointment-footer"
        />

      {/* Success/Error Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setShowModal(false)}
          />
          <div className="relative w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-2xl">
            <div className="px-6 py-5">
              {modalType === 'success' ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-success/10">
                    <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Request Submitted Successfully!</h3>
                  <p className="mb-4 text-base text-gray-700">
                    {modalMessage}
                  </p>
                  <p className="mb-6 text-sm text-gray-600">
                    Our team will call you within <strong>24 hours</strong> to confirm your appointment. 
                    Please keep your phone handy.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full px-6 py-3 font-semibold text-white transition rounded-lg bg-primary hover:bg-primary-dark"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-red-100 rounded-full">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Submission Failed</h3>
                  <p className="mb-6 text-base text-gray-700">
                    {modalMessage}
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full px-6 py-3 font-semibold text-white transition rounded-lg bg-primary hover:bg-primary-dark"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

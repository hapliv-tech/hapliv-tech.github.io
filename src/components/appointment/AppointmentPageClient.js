'use client';
import Review from 'components/reviews/review';
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
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

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
      <div className='p-4'>
        <div className='flex items-center justify-center text-orange-900 mt-44'>
          <h1 className='text-3xl font-bold'>Book Appointment</h1>
        </div>
        <div className='p-4'>
          <p className='px-4 m-auto md:w-[50%] w-full mb-4 text-center text-purple-700'>We're committed to providing you with exceptional dental care. Fill this form and schedule your appointment today for a brighter, healthier smile!</p>
          {prefillBanner && (
            <div
              className="max-w-lg mx-auto mb-4 px-4 py-3 text-sm text-primary-dark bg-primary/10 border border-primary/30 rounded-lg"
              role="status"
            >
              {prefillBanner}
            </div>
          )}
          <form className="m-auto md:w-[50%] w-full p-4 card" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="patient_name">
                Patient Name*
              </label>
              <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${patientNameError ? 'border-red-500' : ''}`} id="patient_name" type="text" placeholder="Firstname Middlename Lastname" />
              <p className="text-xs italic text-red-500">Please fill out this field.</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="mobile">
                Phone Number*
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="mobile" type="tel" placeholder="XXXXXXXXXX" maxLength={10} minLength={10} />
              <p className="text-xs italic text-red-500">Please fill out this field.</p>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="email">
                Email*
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="patient@example.com" />
              <p className="text-xs italic text-red-500">Please fill out this field.</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="preferred_date">
                Preferred Appointment Date
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="preferred_date" type="date" placeholder="dd-MMM-yyy" min={getMinDate()} />
              {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="preferred_time_slot">
                Preferred Time Slot
              </label>
              <div className="relative">
                <select className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="preferred_time_slot" defaultValue='none'>
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
            </div>
          </div>
          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="appointment_for">
                Appointment For
              </label>
              <div className="relative">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
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
            </div>
          </div>

          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="clinic_location">
                Clinic Location
              </label>
              <div className="relative">
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
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
          <div className="checkbox-container">
            <input type="checkbox" id="communication_consent" name="communication_consent" required/>
            <label htmlFor="communication_consent" className="ml-2 text-sm"> I agree to be contacted by Hapliv Dental Clinic over Phone or SMS/Whatsapp/Email.</label>
          </div>
          <div className="flex flex-wrap mt-6 mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w md:mb-0">
              <button className="w-full px-4 py-3 mb-3 font-bold text-white rounded shadow bg-primary-dark hover:bg-primary-dark/60 focus:shadow-outline focus:outline-none" type="submit">
                Request your appointment
              </button>

              <p className='text-center md:hidden'>Or</p>
              <div className='w-full px-4 py-3 mb-3 font-bold text-white bg-black rounded shadow md:hidden'>
                <a href='tel:+919810471255' className='flex justify-center p-2 text-center' rel='nofollow'>
                  <FaPhoneAlt size={25} className='mr-4' /> Call us now
                </a>
              </div>
            </div>
          </div>
        </form>
        <article className='p-4 mt-4 m-auto bg-purple-200 md:w-[50%] w-full'>
          <section>
            <Review />
          </section>
          <section className="p-4 m-auto mt-4 rounded-md">
            <h2 className="text-2xl font-extrabold text-center">Why Choose Our Dental Clinic?</h2>
            <ul className='list-disc'>
              <li className='p-2'>Experience personalized care from our skilled dental professionals.</li>
              <li className='p-2'>We offer a comprehensive range of dental services to meet your oral health needs.</li>
              <li className='p-2'>Book your appointment today and take the first step towards a healthier smile!</li>
            </ul>
          </section>
          <section id='invis-faq' className='items-center pt-4 m-auto text-center'>
            <h2 className='text-2xl font-bold text-center'>FAQs</h2>
            <div className='mt-2 text-sm'>
              {AppointmentFAQs.faqs.map((faq, idx) => {
                return <AppointmentPageFAQItem faq={faq} key={idx}></AppointmentPageFAQItem>
              })}
            </div>
          </section>
        </article>

      </div>

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

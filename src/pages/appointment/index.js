import Slider from 'components/slider';
import Hero from 'components/hero';
import Head from 'next/head';
import { SliderData } from 'components/sliderData';
import Instagram from 'components/instagram';
import { useState } from 'react';
export default function AppointmentPage({ props }) {
  const [patientName,setPatientName] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail] = useState('');
  const [preferredDate,setPreferredDate] = useState('');
  const [loading,setLoading] = useState(false);
  const [preferredTimeSlot,setPreferredTimeSlot] = useState('');
  const [patientNameError,setPatientNameError] = useState(false);
  const [mobileError,setMobileError] = useState(false);
  const [emailError,setEmailError] = useState(false);
  const [preferredDateError,setPreferredDateError] = useState(false);
  const [preferredTimeSlotError,setPreferredTimeSlotError] = useState(false);
  const [appointmentForError,setAppointmentForError] = useState(false);

  const getMinDate = () => {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;     // getMonth() is zero-based
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
      month = '0' + month.toString();
    if (day < 10)
      day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    return maxDate;
  }


  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    setLoading(true)
    // Get data from the form.
    const data = {
      patient_name: event.target.patient_name.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      preferred_date: event.target.preferred_date.value,
      preferred_time_slot: event.target.preferred_time_slot.value,
      appointment_for: event.target.appointment_for.value,
    }
    setPatientNameError(!(patientName!=='' && patientName));
    setMobileError(!(data.mobile!=='' && data.mobile));
    setEmailError(!(data.email!=='' && data.email));
    setPreferredDateError(!(data.preferred_date!=='' && data.preferred_date));
    setPreferredTimeSlotError(data.preferred_time_slot=='none');
    setAppointmentForError(data.appointment_for=='none');
    console.log(patientNameError)
    var hasErrors = patientNameError || mobileError || emailError || preferredDateError || preferredTimeSlotError || appointmentForError;
    if(!hasErrors){
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        // API endpoint where we send form data.
        const endpoint = 'https://hapliv-api.cyclic.app/appointments'
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
    //    const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
    //    const result = await response.json()
        setLoading(false);
        alert(`Request Submitted`)
        event.target.reset();
        setPatientNameError(false);
        setMobileError(false);
        setEmailError(false);
        setPreferredDateError(false);
        setPreferredTimeSlotError(false);
        setAppointmentForError(false);
    }
    setLoading(false);
  }
  return (
    <div className='p-4'>
      <Head>
        <title>Book Your Dental Appointment | Hapliv Dental Clinic</title>
      </Head>
      <div>
      <div className='flex items-center justify-center text-orange-900 mt-36'>
        <h1 className='text-3xl font-bold'>Book Appointment</h1>
      </div>
        <form className="w-full p-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="patient_name">
                Patient Name
              </label>
              <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${patientNameError ? 'border-red-500' : ''}`} id="patient_name" type="text" placeholder="Firstname Middlename Lastname" />
              <p className="text-xs italic text-red-500">Please fill out this field.</p>
            </div>
            {/* <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div> */}
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="mobile">
                Phone Number
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="mobile" type="tel" placeholder="XXXXXXXXXX" />
              <p className="text-xs italic text-red-500">Please fill out this field.</p>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="email">
                Email
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="patient@example.com" />
              {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
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
                  <option value='12:00 AM - 12:30 PM'>12:00 AM - 12:30 PM</option>
                  <option value='12:30 AM - 01:00 PM'>12:30 AM - 01:00 PM</option>
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
                <select className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="appointment_for" defaultValue='none'>
                  <option value="none" hidden>Select an Option</option>
                  <option value='Complete oral checkup'>Complete oral checkup</option>
                  <option value='Braces Consultation'>Braces Consultation</option>
                  <option value='Invisalign Consultation'>Invisalign Consultation</option>
                  <option value='Smile design consultation/Complete oral checkup'>Smile design consultation/Complete oral checkup</option>
                  <option value='Dental Implant Consultation/Complete oral check up'>Dental Implant Consultation/Complete oral check up</option>
                  <option value='Instant Tooth Whitening/Complete oral check up'>Instant Tooth Whitening/Complete oral check up</option>
                  <option value='Other dental procedures'>Other dental procedures</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-6 mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w md:mb-0">
              <button className="w-full px-4 py-3 mb-3 font-bold text-white rounded shadow bg-cyan-900 hover:bg-cyan-800 focus:shadow-outline focus:outline-none" type="submit">
                Book
              </button>
            </div>
          </div>
        </form>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9ZSs9itHmVPgsSSjO-a5LddAjx7hRZR9N9BwRYR84cGK2Ng/viewform?embedded=true" width="100%" height="1191" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      </div>
    </div>
  );
};


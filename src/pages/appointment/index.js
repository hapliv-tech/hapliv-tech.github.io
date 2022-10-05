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
  const [preferredTimeSlot,setPreferredTimeSlot] = useState('');

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
    // Get data from the form.
    const data = {
      patient_name: event.target.patient_name.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      preferred_date: event.target.preferred_date.value,
      preferred_time_slot: event.target.preferred_time_slot.value,
      appointment_for: event.target.appointment_for.value,
    }
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
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Request Submitted`)
    event.target.reset();
  
  }
  return (
    <div className='mt-32 p-4'>
      <Head>
        <title>Hapliv Dental Clinic | Appointment</title>
      </Head>
      <div>
      <div className='flex justify-center items-center text-orange-900'>
        <h1 className='text-3xl font-bold'>Online Appointment</h1>
      </div>
        <form class="w-full p-4" onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="patient_name">
                Patient Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="patient_name" type="text" placeholder="Firstname Middlename Lastname" />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            {/* <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div> */}
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 md:w-1/2 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="mobile">
                Phone Number
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mobile" type="tel" placeholder="XXXXXXXXXX" />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full px-3 md:w-1/2 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="patient@example.com" />
              {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 md:w-1/2 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="preferred_date">
                Preferred Appointment Date
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="preferred_date" type="date" placeholder="dd-MMM-yyy" min={getMinDate()} />
              {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
            <div class="w-full px-3 md:w-1/2 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="preferred_time_slot">
                Preferred Time Slot
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="preferred_time_slot">
                  <option value="none" selected hidden>Select a time slot</option>
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
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">

            <div class="w-full px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="appointment_for">
                Appointment For
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="appointment_for">
                  <option value="none" selected hidden>Select an Option</option>
                  <option value='Complete oral checkup'>Complete oral checkup</option>
                  <option value='Braces Consultation'>Braces Consultation</option>
                  <option value='Invisalign Consultation'>Invisalign Consultation</option>
                  <option value='Smile design consultation/Complete oral checkup'>Smile design consultation/Complete oral checkup</option>
                  <option value='Dental Implant Consultation/Complete oral check up'>Dental Implant Consultation/Complete oral check up</option>
                  <option value='Instant Tooth Whitening/Complete oral check up'>Instant Tooth Whitening/Complete oral check up</option>
                  <option value='Other dental procedures'>Other dental procedures</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6 mt-6">
            <div class="w-full md:w px-3 mb-6 md:mb-0">
              <button class="w-full py-3 px-4 mb-3 shadow bg-orange-900 hover:bg-orange-800 focus:shadow-outline focus:outline-none text-white font-bold rounded" type="submit">
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


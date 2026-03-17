import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhone, FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Appointment booking:', formData);
    alert('Thank you! We will contact you soon to confirm your appointment.');
  };

  const services = [
    'Orthodontics & Braces',
    'Invisalign Clear Aligners',
    'Dental Implants',
    'General Dentistry',
    'Kids Dentistry',
    'Laser Dentistry',
    'Dental Cleaning',
    'Emergency Treatment'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center text-white">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Book Your <span className="text-yellow-300">Free Consultation</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl opacity-90">
              Take the first step towards your perfect smile. Schedule your appointment at our 
              Gurgaon or West Delhi clinic today.
            </p>
          </div>

          {/* Appointment Form */}
          <div className="p-8 bg-white shadow-2xl rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    <FaUser className="inline w-5 h-5 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    <FaPhoneAlt className="inline w-5 h-5 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  <FaEnvelope className="inline w-5 h-5 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Location and Service */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    <FaMapMarkerAlt className="inline w-5 h-5 mr-2" />
                    Preferred Location *
                  </label>
                  <select
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Location</option>
                    <option value="gurgaon">Gurgaon Sector 65</option>
                    <option value="west-delhi">West Delhi</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    <FaCalendarAlt className="inline w-5 h-5 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    <FaClock className="inline w-5 h-5 mr-2" />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your concerns or questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 hover:scale-105"
                >
                  Book Free Consultation
                </button>
                <p className="mt-3 text-sm text-gray-600">
                  * We'll call you within 2 hours to confirm your appointment
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid gap-8 mt-12 text-white md:grid-cols-2">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold">Gurgaon Clinic</h3>
              <p className="mb-2 flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4" />
                Sector 65, Gurgaon, Haryana
              </p>
              <p className="mb-2 flex items-center justify-center gap-2">
                <FaPhoneAlt className="w-4 h-4" />
                +91-XXXXX-XXXXX
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaClock className="w-4 h-4" />
                Mon-Sat: 9 AM - 7 PM
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold">West Delhi Clinic</h3>
              <p className="mb-2 flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4" />
                West Delhi, Delhi
              </p>
              <p className="mb-2 flex items-center justify-center gap-2">
                <FaPhoneAlt className="w-4 h-4" />
                +91-XXXXX-XXXXX
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaClock className="w-4 h-4" />
                Mon-Sat: 9 AM - 7 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
// import React from 'react';
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaDirections, FaPhoneAlt } from 'react-icons/fa';

// const ContactSection = () => {
//   const clinics = [
//     {
//       name: "Gurgaon Clinic",
//       address: "Hapliv Dental Clinic, Shop 27, First Floor, North Block, M3M Tee Point, Golf Course Ext. Rd, Sector 65, Gurugram, Haryana - 122018",
//       phone: "+91-9810471255",
//       email: "haplivdentalclinic@gmail.com",
//       hours: "Mon-Sat: 10:00 AM - 8:00 PM",
//       mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.70126920669!2d77.0642771!3d28.3980894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1980766a7633%3A0x9e9d65aada17b9a5!2sHapliv%20Dental%20Clinic%3A%20Center%20for%20Braces%20%7C%20Invisalign%20Aligner%20%7C%20General%20Dentistry%20%7C%20Kids%20Dental%20%7C%20Sector%2065%20Gurgaon!5e0!3m2!1sen!2sin!4v1752418903345!5m2!1sen!2sin",
//       directionUrl:"https://www.google.com/maps/dir/@28.398089,77.064277,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1980766a7633:0x9e9d65aada17b9a5!2m2!1d77.0642771!2d28.3980894!3e0?hl=en"
//     },
//     {
//       name: "West Delhi Clinic",
//       address: "Hapliv Dental Clinic, Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi, Delhi, 110059",
//       phone: "+91-9810471255",
//       email: "haplivdentalclinic@gmail.com",
//       hours: "Mon-Sat: 10:00 AM - 2:00 PM, 05:00 PM - 8:00 PM",
//       mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.819650539252!2d77.03858084360766!3d28.62275894787752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051fdd5a0e61%3A0xf08aa8b6f6af9564!2sHapliv%20Dental%20Clinic%20%3A%20Center%20for%20Braces%7C%20Invisalign%20%7C%20General%20Dentistry%20%7C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1740830678505!5m2!1sen!2sin",
//       directionUrl:"https://www.google.com/maps/dir/@28.6225073,76.9564625,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d051fdd5a0e61:0xf08aa8b6f6af9564!2m2!1d77.0388639!2d28.6225322!3e0?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw=="
//     }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container px-4 mx-auto">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
//             Visit Our <span className="text-purple-600">Dental Clinics</span>
//           </h2>
//           <div className="w-20 h-1 mx-auto mb-6 bg-orange-500"></div>
//           <p className="max-w-3xl mx-auto text-xl text-gray-600">
//             Conveniently located in Gurgaon Sector 65 and West Delhi. 
//             Choose the location that's most convenient for you.
//           </p>
//         </div>

//         {/* Clinics Grid */}
//         <div className="grid gap-12 lg:grid-cols-2">
//           {clinics.map((clinic, index) => (
//             <div key={index} className="overflow-hidden bg-white shadow-lg rounded-2xl">
//               {/* Map */}
//               <div className="h-64 bg-gray-200">
//                 <iframe
//                   src={clinic.mapUrl}
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen={true}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title={`${clinic.name} Location`}
//                 ></iframe>
//               </div>

//               {/* Clinic Info */}
//               <div className="p-8">
//                 <h3 className="mb-6 text-3xl font-bold text-center text-gray-900">
//                   {clinic.name}
//                 </h3>

//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-4">
//                     <div className="p-3 bg-purple-100 rounded-full">
//                       <FaMapMarkerAlt className="w-6 h-6 text-purple-600" />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 font-semibold text-gray-900">Address</h4>
//                       <p className="text-gray-600">{clinic.address}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="p-3 bg-orange-100 rounded-full">
//                       <FaPhoneAlt className="w-6 h-6 text-orange-600" />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 font-semibold text-gray-900">Phone</h4>
//                       <a href={`tel:${clinic.phone}`} className="text-orange-600 transition-colors hover:text-orange-700">
//                         {clinic.phone}
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="p-3 bg-purple-100 rounded-full">
//                       <FaEnvelope className="w-6 h-6 text-purple-600" />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 font-semibold text-gray-900">Email</h4>
//                       <a href={`mailto:${clinic.email}`} className="text-purple-600 transition-colors hover:text-purple-700">
//                         {clinic.email}
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="p-3 bg-orange-100 rounded-full">
//                       <FaClock className="w-6 h-6 text-orange-600" />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 font-semibold text-gray-900">Hours</h4>
//                       <p className="text-gray-600">{clinic.hours}</p>
//                       <p className="text-sm text-gray-500">Sunday: Closed</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col gap-4 mt-8 sm:flex-row">
//                   <button className="flex items-center justify-center flex-1 px-6 py-3 font-semibold text-white transition-all duration-300 bg-purple-600 rounded-full hover:bg-purple-700">
//                     <FaPhoneAlt className="w-5 h-5 mr-2" />
//                     Call Now
//                   </button>
//                   {/* Directions Button */}
//                   <a href={clinic.directionUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center flex-1 px-6 py-3 font-semibold text-white transition-all duration-300 bg-orange-500 rounded-full hover:bg-orange-600">
//                     <FaDirections className="w-5 h-5 mr-2" />
//                     Get Directions
//                   </a>
//                   {/*<button className="flex items-center justify-center flex-1 px-6 py-3 font-semibold text-white transition-all duration-300 bg-orange-500 rounded-full hover:bg-orange-600">
//                     <FaDirections className="w-5 h-5 mr-2" />
//                     Get Directions
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Emergency Contact */}
        
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaDirections, FaPhoneAlt } from 'react-icons/fa';
import { FadeIn, SlideUp } from './animations';

const ContactSection = () => {


    const clinics = [
    {
      name: "Gurgaon Clinic",
      address: "Hapliv Dental Clinic, Shop 27, First Floor, North Block, M3M Tee Point, Golf Course Ext. Rd, Sector 65, Gurugram, Haryana - 122018",
      phone: "+91-9810471255",
      email: "haplivdentalclinic@gmail.com",
      hours: "Mon-Sat: 10:00 AM - 8:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.70126920669!2d77.0642771!3d28.3980894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1980766a7633%3A0x9e9d65aada17b9a5!2sHapliv%20Dental%20Clinic%3A%20Center%20for%20Braces%20%7C%20Invisalign%20Aligner%20%7C%20General%20Dentistry%20%7C%20Kids%20Dental%20%7C%20Sector%2065%20Gurgaon!5e0!3m2!1sen!2sin!4v1752418903345!5m2!1sen!2sin",
      directionUrl:"https://www.google.com/maps/dir/@28.398089,77.064277,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1980766a7633:0x9e9d65aada17b9a5!2m2!1d77.0642771!2d28.3980894!3e0?hl=en"
    },
    {
      name: "West Delhi Clinic",
      address: "Hapliv Dental Clinic, Dr. Achla Verma, B-85/86, Pipal Wala Rd, Mohan Garden, New Delhi, Delhi, 110059",
      phone: "+91-9810471255",
      email: "haplivdentalclinic@gmail.com",
      hours: "Mon-Sat: 05:00 PM - 8:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.819650539252!2d77.03858084360766!3d28.62275894787752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051fdd5a0e61%3A0xf08aa8b6f6af9564!2sHapliv%20Dental%20Clinic%20%3A%20Center%20for%20Braces%7C%20Invisalign%20%7C%20General%20Dentistry%20%7C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1740830678505!5m2!1sen!2sin",
      directionUrl:"https://www.google.com/maps/dir/@28.6225073,76.9564625,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d051fdd5a0e61:0xf08aa8b6f6af9564!2m2!1d77.0388639!2d28.6225322!3e0?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw=="
    }
  ];

const locations = clinics.map(clinic => ({
    name: clinic.name,
    address: clinic.address,
    phone: clinic.phone,
    email: clinic.email,
    hours: {
        weekdays: clinic.hours,
        sunday: "Sunday: Closed"
    },
    mapEmbed: clinic.mapUrl,
    directionUrl: clinic.directionUrl
}));

  

  return (
    <section className="py-28 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-hero-sm">
              Visit Our <span className="text-primary">Clinics</span>
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8 bg-accent"></div>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 md:text-xl">
              Conveniently located in Gurgaon Sector 65 and West Delhi. Choose the location that's most convenient for you.
            </p>
          </div>
        </FadeIn>

        {/* Locations Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((location, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <div className="overflow-hidden bg-white shadow-soft-lg rounded-card">
              {/* Map */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Location Map`}
                  className="absolute inset-0"
                />
              </div>

              {/* Location Details */}
              <div className="p-8 md:p-10">
                <h3 className="flex items-center mb-6 text-2xl font-semibold tracking-tight text-gray-900">
                  <FaMapMarkerAlt className="w-6 h-6 mr-3 text-primary" />
                  {location.name}
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <FaDirections className="flex-shrink-0 w-5 h-5 mt-1 text-orange-500" />
                    <div>
                      <p className="leading-relaxed text-gray-700">{location.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3">
                    <FaPhoneAlt className="flex-shrink-0 w-5 h-5 text-primary" />
                    <div>
                      <a 
                        href={`tel:${location.phone}`}
                        className="font-semibold text-primary transition-colors duration-200 hover:text-primary-dark"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="flex-shrink-0 w-5 h-5 text-accent" />
                    <div>
                      <a 
                        href={`mailto:${location.email}`}
                        className="font-semibold text-accent transition-colors duration-200 hover:text-accent-dark"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3">
                    <FaClock className="flex-shrink-0 w-5 h-5 mt-1 text-primary" />
                    <div>
                      <div className="text-gray-700">
                        <div className="mb-1 font-semibold">Opening Hours:</div>
                        <div>{location.hours.weekdays}</div>
                        <div>{location.hours.sunday}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-gray-100 sm:flex-row">
                  <a
                    href={'tel:' + location.phone}
                    className="flex items-center justify-center flex-1 px-6 py-3 text-base font-semibold tracking-wide text-white transition-all duration-300 transform bg-primary rounded-button shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
                    rel="nofollow"
                  >
                    <FaPhoneAlt className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <a
                    href={location.directionUrl}
                    className="flex items-center justify-center flex-1 px-6 py-3 text-base font-semibold tracking-wide text-accent transition-all duration-300 transform border-2 border-accent rounded-button hover:bg-accent hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDirections className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                
                </div>
              </div>
            </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

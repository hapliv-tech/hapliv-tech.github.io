import React, { useState } from 'react';
// import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaStar, FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { reviewData } from './reviews/reviewData';

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = reviewData;


    /*[
      {
        name: "Priya Sharma",
        location: "Gurgaon Sector 65",
        treatment: "Invisalign Treatment",
        rating: 5,
        text: "I had an amazing experience with Hapliv Dental Clinic! The Invisalign treatment completely transformed my smile. Dr. and the team were so professional and made me feel comfortable throughout the entire process. Highly recommend for anyone looking for the best orthodontist in Gurgaon!",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Rajesh Kumar",
        location: "West Delhi",
        treatment: "Dental Implants",
        rating: 5,
        text: "After losing a tooth in an accident, I was worried about my smile. The dental implant procedure at Hapliv Dental was seamless and painless. The new tooth looks and feels completely natural. Exceptional care and technology - truly the best dental clinic in West Delhi!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Anita Gupta",
        location: "Gurgaon",
        treatment: "Family Dentistry",
        rating: 5,
        text: "We've been bringing our entire family to Hapliv Dental for over 3 years. From my kids' dental cleanings to my husband's root canal treatment, they handle everything with such care and expertise. The staff is wonderful with children, and the clinic is always clean and modern.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Vikram Singh",
        location: "West Delhi",
        treatment: "Braces Treatment",
        rating: 5,
        text: "I was hesitant about getting braces as an adult, but the team at Hapliv Dental made the entire journey comfortable and encouraging. The results exceeded my expectations! My confidence has improved tremendously. Thank you for giving me the perfect smile I always wanted.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    ];*/

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <section className="relative py-20 overflow-hidden text-white bg-gray-900">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-orange-900/20"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute w-32 h-32 border border-white rounded-full top-10 left-10"></div>
                    <div className="absolute w-20 h-20 border border-white rounded-full top-32 right-20"></div>
                    <div className="absolute w-24 h-24 border border-white rounded-full bottom-20 left-32"></div>
                </div>
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        What Our <span className="text-orange-500">Patients Say</span>
                    </h2>
                    <div className="w-20 h-1 mx-auto mb-6 bg-orange-500"></div>
                    <p className="max-w-3xl mx-auto text-xl text-gray-300">
                        Don't just take our word for it. Here's what our satisfied patients from Gurgaon and West Delhi have to say about their experience at Hapliv Dental Clinic.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative p-8 text-gray-900 bg-white shadow-2xl rounded-2xl md:p-12">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8">
                            <div className="p-4 bg-[#5A09A4] rounded-full">
                                <FaQuoteLeft className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="pt-8">
                            {/* Stars */}
                            <div className="flex justify-center mb-6">
                                {renderStars(testimonials[currentTestimonial].rating)}
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="p-16 mb-8 italic leading-relaxed text-center text-md md:text-lg">
                                "{testimonials[currentTestimonial].reviewText}"
                            </blockquote>

                            {/* Patient Info */}
                            <div className="flex items-center justify-center space-x-4">

                                {/* <div className='justify-center w-10 h-10 mr-4 leading-9 text-yellow-100 bg-gray-600 border-2 rounded-full border-orange-50'>{testimonials[currentTestimonial].name.charAt(0)}{testimonials[currentTestimonial].name.split(' ')[1].charAt(0)}</div> */}
                                <Image
                                    src={testimonials[currentTestimonial].profileUrl}
                                    alt={testimonials[currentTestimonial].name}
                                    width={64} height={64}
                                    className="object-cover w-16 h-16 rounded-full"
                                />
                                <div className="text-center">
                                    <div className="text-xl font-bold text-[#5A09A4]">
                                        {testimonials[currentTestimonial].name}
                                    </div>
                                    <div className="text-gray-600">
                                        {testimonials[currentTestimonial].location}
                                    </div>
                                    <div className="text-sm font-semibold text-orange-600">
                                        {testimonials[currentTestimonial].treatment}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-[#5A09A4] rounded-full shadow-lg left-4 top-1/2 hover:bg-purple-700"
                    >
                        <FaArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute p-3 text-white transition-all duration-300 transform -translate-y-1/2 bg-[#5A09A4] rounded-full shadow-lg right-4 top-1/2 hover:bg-purple-700"
                    >
                        <FaArrowRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center mt-8 space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-orange-500 scale-125' : 'bg-gray-600'
                                }`}
                        />
                    ))}
                </div>

                {/* Google Reviews Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center px-6 py-3 space-x-4 text-gray-900 bg-white rounded-full shadow-lg">
                        <div className="flex items-center space-x-1">
                            {renderStars(5)}
                        </div>
                        <div className="font-semibold">
                            4.9/5 on Google Reviews
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
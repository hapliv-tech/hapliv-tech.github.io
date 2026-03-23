import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import {
    getOrCreateAnalyticsUserId,
    trackAppointmentApiFailure,
    trackAppointmentBooked,
} from 'lib/analytics';

// Utility functions for localStorage
const STORAGE_KEY = 'hapliv_user_details';

const saveUserDetails = (data) => {
    if (typeof window !== 'undefined') {
        try {
            const userDetails = {
                patient_name: data.patient_name || '',
                mobile: data.mobile || '',
                email: data.email || '',
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
async function saveFormData(data, src, cta, url) {
    data["email"] = data["email"] && data["email"] != '' ? data["email"] : 'contact@haplivdentalclinic.com';
    data["appointment_for"] = "Clicked " + cta + " from " + src;
    data["preferred_date"] = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
    data["preferred_time_slot"] = '10:00 am - 10:30 am';
    data["clinic_location"] = 'Sector 65, Gurugram';
    data['communication_consent'] = {
        whatsapp: true,
        email: true,
        sms: true,
        phone: true
    };
    const aid = getOrCreateAnalyticsUserId();
    if (aid) data.analytics_client_id = aid;
    return await fetch(url, {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        method: "POST"
    })
}

export default function RequestForCallback({ src, cta, url, callback, userQuestions, onSuccess }) {
    const storedDetails = getUserDetails();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: {
            patient_name: storedDetails?.patient_name || '',
            mobile: storedDetails?.mobile || '',
        }
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    
    const onSubmit = async (data) => {
        setLoading(true);
        setError(null);
        try {
            var qA = '';
            if(userQuestions && userQuestions.length > 0){
                userQuestions.forEach(q => {
                    qA += 'Q. '+q.question + ' A. '+ q.answer + '\n';
                });
            }
            const updatedSrc = src + ' '+qA; 
            const response = await saveFormData(data, updatedSrc, cta, url || 'https://api.haplivdentalclinic.com/appointments', callback);
            
            if (response.ok) {
                trackAppointmentBooked({
                    formType: 'callback_modal',
                    source: src,
                    ctaLabel: cta,
                    location: data.clinic_location,
                    value: 500,
                    currency: 'INR',
                });

                // Save user details to localStorage
                saveUserDetails({
                    patient_name: data.patient_name,
                    mobile: data.mobile,
                    email: data.email || '',
                });
                
                reset();
                setSuccess(true);
                if (onSuccess) {
                    setTimeout(() => {
                        onSuccess();
                    }, 2000);
                }
            } else {
                const status = response.status;
                try {
                    await response.json();
                } catch {
                    trackAppointmentApiFailure({
                        formType: 'callback_modal',
                        source: src,
                        ctaLabel: cta,
                        errorType: 'parse_error',
                        httpStatus: status,
                    });
                    setError('Unable to submit your request. Please try again or call us at +91 98104 71255');
                    return;
                }
                trackAppointmentApiFailure({
                    formType: 'callback_modal',
                    source: src,
                    ctaLabel: cta,
                    errorType: 'http_error',
                    httpStatus: status,
                });
                setError('Unable to submit your request. Please try again or call us at +91 98104 71255');
            }
        } catch (err) {
            trackAppointmentApiFailure({
                formType: 'callback_modal',
                source: src,
                ctaLabel: cta,
                errorType: 'network',
            });
            setError('Something went wrong. Please try again or call us at +91 98104 71255');
        } finally {
            setLoading(false);
        }
    }
    const fields = [
        {
            type: "text", placeholder:'Name', name: "patient_name", required: true, label: "Name", validation: {
                required: { value: true, message: 'Name is required' }
            }
        },
        {
            type: "tel", name: "mobile", placeholder:'Phone',required: true, label: "Phone", autoComplete: "mobile", validation: {
                required: { value: true, message: 'Phone is required.' },
                pattern: { value: /^\d{10}$/, message: 'Invalid phone number' },
            }
        }
    ];
    if (success) {
        return (
            <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-success/10">
                    <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Request Submitted Successfully!</h3>
                <p className="mb-1 text-base text-gray-700">
                    Thank you for choosing Hapliv Dental Clinic.
                </p>
                <p className="text-sm text-gray-600">
                    Our team will call you within <strong>24 hours</strong> to confirm your appointment. 
                    Please keep your phone handy.
                </p>
            </div>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 md:flex-row">
                {fields.map((field, index) => {
                    return (
                        <div className="w-full px-3 mb-6 md:w md:mb-0" key={field.name + 'div' + index}>
                            <input 
                                className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded-lg appearance-none focus:outline-none focus:bg-white invalid:border-red-500" 
                                type={field.type} 
                                placeholder={field.placeholder} 
                                autoComplete={field.autoComplete} 
                                key={field.name + index}
                                disabled={loading}
                                {...register(field.name, field.validation)} 
                            />
                            {errors[field.name] && <Error message={errors[field.name].message} />}
                        </div>
                    )
                })}
                <div className="w-full px-3 mb-6 md:w md:mb-0">
                    <input 
                        type="submit" 
                        value={loading ? 'Submitting...' : cta} 
                        disabled={loading}
                        className="block w-full p-4 mb-3 leading-tight text-white bg-success hover:bg-success-hover border rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all" 
                    />
                </div>
            </form>
            {error && (
                <div className="px-4 pb-4">
                    <div className="p-3 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">
                        {error}
                    </div>
                </div>
            )}
        </>
    );
}

function Error({ message }) {
    return (
        <div className="text-xs italic text-red-500">
            {message}
        </div>
    );
}




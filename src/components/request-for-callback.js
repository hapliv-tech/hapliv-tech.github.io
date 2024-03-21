import { useForm } from "react-hook-form";
import { useState } from 'react';
async function saveFormData(data, src, cta, url) {
    data["email"] = data["email"] ? data["email"] : '';
    data["appointment_for"] = "Clicked " + cta + " from " + src;
    data["preferred_date"] = '-';
    data["preferred_time_slot"] = '-';
    return await fetch(url, {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        method: "POST"
    })
}

export default function RequestForCallback({ src, cta, url, callback, userQuestions }) {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = data => {
        setLoading(true);
        var qA = '';
        if(userQuestions && userQuestions.length > 0){
            userQuestions.forEach(q => {
                qA += 'Q. '+q.question + ' A. '+ q.answer + '\n';
            });
        }
        src = src + ' '+qA; 
        const response = saveFormData(data, src, cta, 'https://hapliv-api.cyclic.app/appointments', callback);
        reset();
        alert('Callback request submitted successfully');
        setLoading(false);
        return response;
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
    return <> <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 md:flex-row">
        {fields.map((field, index) => {
            return (
                <div className="w-full px-3 mb-6 md:w md:mb-0" key={field.name + 'div' + index}>
                    {/* <label htmlFor={field.name} key={field.name + 'label' + index} className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">{field.label}</label> */}
                    <input className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded-lg appearance-none focus:outline-none focus:bg-white invalid:border-red-500" type={field.type} placeholder={field.placeholder} autoComplete={field.autoComplete} key={field.name + index}
                        {...register(field.name, field.validation)} />
                    {errors[field.name] && <Error message={errors[field.name].message} />}
                </div>
            )

        })}
        <div className="w-full px-3 mb-6 md:w md:mb-0">
            {/* <span className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">&nbsp;</span> */}
            <input type="submit" value={cta} className="block w-full p-4 mb-3 leading-tight text-white bg-green-500 border rounded-lg appearance-none cursor-pointer hover:bg-green-600" />
        </div>
    </form></>;
}

function Error({ message }) {
    return (
        <div className="text-xs italic text-red-500">
            {message}
        </div>
    );
}




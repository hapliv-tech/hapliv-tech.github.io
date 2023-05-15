import { useForm } from "react-hook-form";
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

export default function RequestForCallback({ src, cta, url, callback }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => saveFormData(data, src, cta, 'https://hapliv-api.cyclic.app/appointments', callback);
    const fields = [
        {
            type: "text", name: "patient_name", required: true, label: "Name", validation: {
                required: { value: true, message: 'Name is required' }
            }
        },
        {
            type: "phone", name: "mobile", required: true, label: "Phone", autoComplete: "mobile", validation: {
                required: { value: true, message: 'Phone is required.' },
                pattern: { value: /^\d{10}$/, message: 'Invalid phone number' },
            }
        }
    ];
    return <> <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 md:flex-row">
        {fields.map((field, index) => {
            return <>
                <div className="w-full px-3 mb-6 md:w md:mb-0">
                    <label htmlFor={field.name} key={field.name + 'label' + index} className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">{field.label}</label>
                    <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white invalid:border-red-500" type={field.type} autoComplete={field.autoComplete} key={field.name + index}
                        {...register(field.name, field.validation)} />
                    {errors[field.name] && <Error message={errors[field.name].message} />}
                </div>
            </>

        })}
        <div className="w-full px-3 mb-6 md:w md:mb-0">
            <span className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">&nbsp;</span>
            <input type="submit" value={cta} className="block w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-[#0F4C5C] text-white hover:bg-[#0f4f5f]" />
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




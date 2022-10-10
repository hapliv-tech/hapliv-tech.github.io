import { useState } from "react";

export default function Timings() {
    const time = {
        "Mon": [{ "start": 10, "end": 13 }, { "start": 17, "end": 20 }],
        "Tue": [{ "start": 10, "end": 13 }, { "start": 17, "end": 20 }],
        "Wed": [{ "start": 10, "end": 13 }, { "start": 17, "end": 20 }],
        "Thu": [{ "start": 10, "end": 13 }, { "start": 17, "end": 20 }],
        "Fri": [{ "start": 10, "end": 13 }, { "start": 17, "end": 20 }],
        "Sat": [],
        "Sun": [{ "start": 10, "end": 13 }, { "start": 17, "end": 20 }]
    }

    const [hour, setHour] = useState(new Date().getHours())
    return (
        <>
            <div className="w-full justify-center left-0 right-0 block">
                <h2 className="text-3xl font-bold text-center p-4 text-orange-900 underline">Timings</h2>
                <ul className="text-center">
                    {Object.keys(time).map((key, i) => {
                        return (<li className="justify-items-start text-center p-2" key={i}><span className="p-1 justify">{key}: </span>{time[key]?.map((val, idx) => { return <span className="mr-2" key={idx}>{val['start'] % 12} {(val['start'] >= 12) ? 'PM' : 'AM'} - {val['end'] % 12} {(val['end'] >= 12) ? 'PM' : 'AM'}</span> })} </li>);
                    })}
                </ul>
            </div>
        </>
    );
}
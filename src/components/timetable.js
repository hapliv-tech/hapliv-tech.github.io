import { useState } from "react";

export default function Timings({textColor}) {
    const time = {
        "Mon-Sat": [{ "start": 10, "end": 20 }],
        "Sun": [{ "start": 10, "end": 13 }]
    }
    const [hour, setHour] = useState(new Date().getHours())
    return (
        <>
            <div className="left-0 right-0 justify-center block w-full" style={{color:textColor}}>
                <h2 className="p-4 text-3xl font-bold text-center underline" style={{color:textColor}}>Timings</h2>
                <ul className="text-center">
                    {Object.keys(time).map((key, i) => {
                        return (<li className="p-2 text-center justify-items-start" style={{color:textColor}} key={i}><span className="p-1 justify">{key}: </span>{time[key]?.map((val, idx) => { return <span className="mr-2" key={idx}>{val['start'] % 12} {(val['start'] >= 12) ? 'PM' : 'AM'} - {val['end'] % 12} {(val['end'] >= 12) ? 'PM' : 'AM'}</span> })} </li>);
                    })}
                </ul>
            </div>
        </>
    );
}
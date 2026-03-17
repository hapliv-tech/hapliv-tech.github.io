import { useState } from "react";

export default function Timings({textColor, locationKey}) {
    const time = {
        "gurgaon-sec-65": {
            "Mon-Sat": [{ "start": 10, "end": 20 }],
            "Sun": [{ "start": 10, "end": 13 }]
        },
        "west-delhi": {
            "Wed": [{ "start": 10, "end": 20 }],
            "Thu":[{ "start": 10, "end": 20 }]
        }
    }

    const titleForLocation ={"gurgaon-sec-65":"Timings: Sector 65, Gurgaon", "west-delhi":"Timings: Mohan Garden, West Delhi"}

    
    const [hour, setHour] = useState(new Date().getHours())
    return (
        <>
            <div className="left-0 right-0 justify-center block w-full" style={{color:textColor}}>
                <h2 className="p-4 text-3xl font-bold text-center" style={{color:textColor}}>{titleForLocation[locationKey]}</h2>
                <ul className="text-center">
                    {Object.keys(time[locationKey]).map((key, i) => {
                        return (<li className="p-2 text-center justify-items-start" style={{color:textColor}} key={i}><span className="p-1 justify">{key}: </span> {time[locationKey][key]?.map((val, idx) => { return <span className="mr-2" key={idx}>{val['start'] % 12} {(val['start'] >= 12) ? 'PM' : 'AM'} - {val['end'] % 12} {(val['end'] >= 12) ? 'PM' : 'AM'}</span> })} </li>);
                    })}
                </ul>
            </div>
        </>
    );
}
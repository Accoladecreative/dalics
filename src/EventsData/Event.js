import React from 'react'
import Card from '../ui/Card';

const Event = (props) => {

    const event = [
        {
            "name": "Wake up up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "name": "Gettig up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "name": "Gettig up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "name": "Gettig up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "name": "Gettig up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }
    ];







    return (
        <div>{

            event.map((map) => {
                return (

                    <Card>

                        <h3 key={map.name}>{map.name}</h3>
                        <p key={map.name}>{map.time}</p>
                        <p key={map.name}>{map.details}</p>
                        <p key={map.name}>{map.Accomplished}</p>
                        <p key={map.name}>{map.progress}</p>
                        <button className="btn btn-primary mr-3">Edit</button>
                        <button className="btn btn-danger mr-3">Delete</button>

                    </Card>
                )
            }





            )}




        </div>
    )
}

export default Event

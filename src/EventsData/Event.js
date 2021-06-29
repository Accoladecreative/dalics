import React from 'react'
import Card from '../ui/Card';

const Event = (props) => {

    const event = [
        {
            "name":"Wake up up now",
            "time": "8:00am",
            "details":"Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "name":"Gettig up now",
            "time": "8:00am",
            "details":"Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "name":"Gettig up now",
            "time": "8:00am",
            "details":"Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "name":"Gettig up now",
            "time": "8:00am",
            "details":"Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "name":"Gettig up now",
            "time": "8:00am",
            "details":"Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }
    ];


   




    return (
        <div>{
            
            event.map((map)=>
                {
                    
                return(
                    <Card>
            <h3>{map.name}</h3>
            <p>{map.time}</p>
            <p>{map.details}</p>
            <p>{map.Accomplished}</p>
            <p>{map.progress}</p></Card>
            ) }
            
            

               
                
            )}
        
       
            
            
        </div>
    )
}

export default Event

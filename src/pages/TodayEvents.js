
import React, { useState, useEffect } from "react";
import Events from "../EventsData/Event"


const TodayEvents = () => {

    // const date = 12;
    // const today = 2;

    // const setEvent = date == today ? <p>Today's Event  {today}</p> : <p>This Event is not for today  {today}</p>


    let num = 0

    function handleIncrease() {
        this.setState({ num: num + 1 });
    }


    return (
        <div className="container">
            <h1>Today's Events</h1>
            <p className="badge badge-primary mg-5">{num}</p>
            <button className='btn btn-primary' onClick={handleIncrease}>Add</button>
            <Events />

        </div>
    )
}

export default TodayEvents

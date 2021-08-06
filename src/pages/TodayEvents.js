
import React, { useState } from "react";
import Events from "../EventsData/Event"
import Layout from "../ui/Layout";


const TodayEvents = () => {

    // const date = 12;
    // const today = 2;

    // const setEvent = date == today ? <p>Today's Event  {today}</p> : <p>This Event is not for today  {today}</p>

    const [num, addNum] = useState(0);


    function handleIncrease() {
        addNum(num+1)
    } function handleDecrease() {
        addNum(num-1)
    }function handleReset() {
        addNum(0)
    }


    return (
        <Layout>
            <h1>Today's Events</h1>
            <p className="badge badge-primary mg-5">{num}</p><br/>
            <button className='btn btn-success' onClick={handleIncrease}>Add</button>
            <button className='btn btn-dark' onClick={handleReset}>Reset</button>
            <button className='btn btn-warning' onClick={handleDecrease}>Decrease</button>
         <Events />

        </Layout>
    )
}

export default TodayEvents
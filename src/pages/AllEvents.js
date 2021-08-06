import React from 'react'
import Events from "../EventsData/Event"
import SearchEvent from "../components/SearchEvent"
import Layout from '../ui/Layout'


const AllEvents = () => {

    // const handleSearch=(e)=>{
    //     console.log(e.target.value)
    // }
    const handleSearch=()=>{
        //console.log("Hll")
    }

    return (
        <Layout>
            <h1 className="d-inline">All Events</h1>
            <SearchEvent onHandleSearch={handleSearch} />
            <Events />
        </Layout>
    )
}

export default AllEvents

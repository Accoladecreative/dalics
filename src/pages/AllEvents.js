import React from 'react'
import Events from "../EventsData/Event"
import Layout from '../ui/Layout'

const AllEvents = () => {
    return (
        <Layout>
            <h1>All Events</h1>
            <Events />
        </Layout>
    )
}

export default AllEvents

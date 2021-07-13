import React from 'react'
import Event from "../EventsData/Event"
import Layout from '../ui/Layout'


const SavedEvents = () => {
    return (
        <Layout>
            <h1 style={{ color: "#c5c5c5" }} >Saved Events</h1>
            <Event />
        </Layout>
    )
}

export default SavedEvents

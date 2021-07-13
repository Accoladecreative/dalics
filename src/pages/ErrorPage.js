import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../ui/Layout'

const ErrorPage = () => {
    return (
        <Layout>
            <h2>Sorry,</h2>
            <h4>This page does not exist</h4>
            <p>Go back to
            <Link to="/dashboard"> Homepage</Link>
            </p>
        </Layout>
    )
}

export default ErrorPage

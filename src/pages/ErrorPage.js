import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../ui/Layout'
import Img from "../Assets/img/3819740.jpg"


const ErrorPage = () => {
    let h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;



const alt = <div><h1><strong>Sorry,</strong> </h1>
<h4>This page does not exist</h4></div>
    return (
        <Layout>
            <div className='mx-auto col-lg-10 text-center'> 
               
                <img src={Img} alt={alt} srcset="" height={h-300}
                     width={window.innerHeight-100} />
                
                <h3>Go back to
                <Link to="/dashboard" className='text-link'> Homepage</Link>
                </h3>
            </div>
           
        </Layout>
    )
}

export default ErrorPage

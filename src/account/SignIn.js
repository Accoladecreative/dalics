import React, {useState} from 'react'
import Card from '../ui/Card';

import Layout from '../ui/Layout'

const SignIn = () => {

    

    // let work on useState

    let [state, setState] = useState("Sign In")

    function handleSubmit(){
        setState("Signing In...")
    }


    return (
        <div>
            <Layout>
            <h2>{state}</h2>
            <Card>
            {/* <form action="" method="post"> */}
            <form onSubmit={handleSubmit}>

    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>



            </form>




                
            </Card></Layout>
        </div>
    )
}

export default SignIn

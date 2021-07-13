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

    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>



            </form>




                
            </Card></Layout>
        </div>
    )
}

export default SignIn


import { Link } from 'react-router-dom'
import React from 'react'
import Card from '../ui/Card';

const SignUp = () => {
    return (
        <div>
            <Card>

            <form action="" method="post">

            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input required type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter FullName" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className="form-group form-check">
                    <input required type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">I have read and Accept <Link to="">
                        terms and conditions
                    </Link>
                    
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>



            </form>




            </Card>
        </div>
    )
}

export default SignUp

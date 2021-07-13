
import { Link } from 'react-router-dom'
import React from 'react'
import Card from '../ui/Card';

const SignUp = () => {
    return (
        <div>
            <Card>

            <form action="" method="post">

            <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input required type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter FullName" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group form-check">
                    <input required type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">I have read and Accept <Link to="">
                        terms and conditions
                    </Link>
                    
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>



            </form>




            </Card>
        </div>
    )
}

export default SignUp

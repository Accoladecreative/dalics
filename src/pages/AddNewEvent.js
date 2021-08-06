import React,{useState} from 'react'
import Card from '../ui/Card'
import './AddNewEvent.module.css'
import Layout from '../ui/Layout'

import { Link } from 'react-router-dom'

const AddNewEvent = () => {

    const {message, displayMessage} = useState('<p>bbbbbbbbbbb</p>')

    // const display; 
    

    function validateForm(e) {

        e.preventDefault()
        displayMessage(<div className="p-2">
        <p className="alert alert-success alert-dismissible fade show" role="alert">
        Event Successfully Added, You can view it <Link to="/today-events">here</Link> </p>
        <button type="button" className="close" aria-label="Close" >
        <span aria-hidden="true">x</span>
        </button>
    </div>)
    }


    return (
    <Layout>
    <h1>Add New Event</h1>
        <Card>
            
            <form onSubmit={validateForm}>
            {message}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Event Name" required/>
                    <small id="emailHelp" className="form-text text-muted">This will be peculiar to every events</small>
                </div>
 
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <textarea className="form-control" id="details" placeholder="Details" rows="3" required></textarea>
                </div>

                <div className="form-row">
                    <div className="form-group col-6">
                        <label htmlFor="startTime">Start Time</label>
                        <input type="time" className="form-control" id="startTime" placeholder="Time" required/>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="endTime">End Time</label>
                        <input type="time" className="form-control" id="endTime" placeholder="Time"/>
                    </div>
                </div>
               
                {/* <div class="form-row">
                    <div class="form-groupcol-md-2">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" htmlFor="gridCheck">
                            Accomplished
                        </label>
                        </div>
                        
                    
                    </div> 


                   


                   
                </div>*/}

                 <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Accept terms and conditions</label>
                </div>
                <br/>       
                <button type="submit" className="btn btn-primary">Add Event</button>
            </form>
        </Card>
        </Layout>
    )
}

export default AddNewEvent

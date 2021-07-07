import React from 'react'
import Card from '../ui/Card'
import './AddNewEvent.module.css'

const AddNewEvent = () => {
    const display = () => <p className="alert alert-success" role="alert">Event Successfull Added</p>


    return (
    <div className="container">
    <h1>Add New Event</h1>
        <Card>
            
            <form onSubmit={display}>

            <div className="form-group">
                   
                </div> 
                
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Event Name"/>
                    <small id="emailHelp" className="form-text text-muted">This will be peculir to every events</small>
                </div>
 
                <div className="form-group">
                    <label for="details">Details</label>
                    <textarea className="form-control" id="details" placeholder="Details" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Time</label>
                    <input type="time" className="form-control" id="exampleInputPassword1" placeholder="Time"/>
                </div>
               
                {/* <div class="form-row">
                    <div class="form-groupcol-md-2">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck">
                            Accomplished
                        </label>
                        </div>
                        
                    
                    </div> 


                   


                   
                </div>*/}

                 <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Acept term s and conditions</label>
                </div>
                <br/>       
                <button type="submit" className="btn btn-primary">Add Event</button>
            </form>
        </Card>
        </div>
    )
}

export default AddNewEvent

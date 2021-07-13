import React, {useState} from 'react'
import DeleteDialog from '../components/Dialog/DeleteDialog';
import Backdrop from '../components/Dialog/Backdrop';
import Card from '../ui/Card';
import Layout from '../ui/Layout';

const Event = (props) => {

    const event = [
        {
            "id":1,
            "name": "Wake up up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "id":2,
            "name": "Gettig up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "id":3,
            "name": "Gettig up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            "id":4,
            "name": "Gettig up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        }, {
            
            "id":5,
            "name": "Gettig up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 20
        },{
            
            "id":6,
            "name": "Sleep",
            "time": "10:00m",
            "details": "I want to sleep by 10pm and wake by 3am",
            "Accomplished": false,
            "progress": 20
        }
    ];

    //keep and delete event1
    let [setEvent, deleteAllEvents] = useState(event)

    //open dialog modal
    const [modalIsOpen, setModalIsOpen] = useState(false);


    function deleteHandler() {
      setModalIsOpen(true);
    }
  
    function closeModalHandler() {
      setModalIsOpen(false);
    }

    function editEvent(){
        prompt("edit function not available at the moment")

        
    }

    //


    const [num, addNum] = useState(0);


    function handleIncrease() {
        if(num<100)
        addNum(num+10)
    } function handleDecrease() {
        if(num>=1)
        addNum(num-10)
    }function handleReset() {
        addNum(0)
    }

    let style = {
        width : `${num}%`
    }

    return (
        <div> 
        {setEvent.map((map) => {
                return (
                    <Card>
                    <button type="button" className="close" aria-label="Close" onClick={deleteHandler}>
                    <span aria-hidden="true">&times;</span>
                    </button>                           
                        <h3 key={map.id}>{map.name}</h3>
                        <p key={map.id}>{map.time}</p>
                        <p key={map.id}>{map.details}</p>
                        <p key={map.id}>{map.Accomplished}</p>
                        <p key={map.id}>{map.progress}</p>

                        <label>Progress:</label>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" style={style}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> {num}</div>
                        </div>
                        <button className='btn btn-success' onClick={handleIncrease}>Add</button>
            <button className='btn btn-dark' onClick={handleReset}>Reset</button>
            <button className='btn btn-warning' onClick={handleDecrease}>Decrease</button><br/><br></br>
        
                        
                        <button className="btn btn-primary mr-3" onClick={editEvent}>Edit</button>
                        <button className="btn btn-danger mr-3" onClick={()=> deleteAllEvents([2])}>Delete</button>

                    </Card>
                )
            }
)}

<Layout>
<button type="button" className="close" aria-label="Close" onClick={deleteHandler}>
                    <span aria-hidden="true">Delete All Events</span>
                    </button>
</Layout>

{modalIsOpen && <DeleteDialog onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      }
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}


        </div>
    )
}

export default Event

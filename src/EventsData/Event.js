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
        
        
    }

    //

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
                        <button className="btn btn-primary mr-3" onClick={deleteHandler}>Edit</button>
                        <button className="btn btn-danger mr-3" onClick={()=> deleteAllEvents([5])}>Delete</button>

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

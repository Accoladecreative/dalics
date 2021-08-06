import React, {useState} from 'react'
import DeleteDialog from '../components/Dialog/DeleteDialog';
import Backdrop from '../components/Dialog/Backdrop';
import Card from '../ui/Card';
import Layout from '../ui/Layout';
import SStyle from './Event.module.css'

const Event = () => {

    const event = [
        {
            "id":1,
            "name": "Wake up up now",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 27
        }, {
            "id":2,
            "name": "Getting up now",
            "time": "8:01am",
            "details": "Today",
            "Accomplished": false,
            "progress": 20
        }, {
            "id":3,
            "name": "ss",
            "time": "8:00am",
            "details": "Today is he i will ",
            "Accomplished": false,
            "progress": 40
        }, {
            "id":4,
            "name": "Getting up now agan",
            "time": "8:50am",
            "details": "Today is he i will hn",
            "Accomplished": false,
            "progress": 33
        }, {
            
            "id":5,
            "name": "Getting up",
            "time": "12:00am",
            "details": "dddd ",
            "Accomplished": false,
            "progress": 100
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

    
    // function editEvent(){
    //     fetch("./aaa.txt")
    //     .then((result) => {
    //         alert(result.text.length)
    //     }).catch((err) => {
    //             alert(err)
    //         });
    //     }
   
    function editEvent(){
        fetch("https://jsonplaceholder.typicode.com/post/1")
        .then(result=>result.text)
        .then(data=>alert(data))
        .catch((err) => {
                alert(err)
            });
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
                    <button type="button" className="close text-danger" aria-label="Close" onClick={deleteHandler}>
                    <span aria-hidden="true">&times;</span>
                    </button>                           
                        <h3 key={map.name.length}>{map.name}</h3>
                         <p key={map.time}>{map.time}</p>
                        <p key={map.details}>{map.details}</p>
                        <p key={map.Accomplished}>{map.Accomplished}</p>
                       

                        <label className="d-inline">Progress:</label> <span key={map.progress}>{map.progress}</span> 
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" style={style}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> {num}</div>
                        </div>
                        <button className='btn btn-success' onClick={handleIncrease}>Add</button>
                            <button className='btn btn-dark' onClick={handleReset}>Reset</button>
                            <button className='btn btn-warning' onClick={handleDecrease}>Decrease</button><br/><br></br>
        
                        
                        <button className="btn btn-primary mr-3" onClick={editEvent}>Edit</button>
                        <button className="btn btn-danger mr-3" onClick={()=> deleteAllEvents([2])}>Delete</button>
                        
                        <div className="custom-control custom-switch float-right">
                            <input type="checkbox" className="custom-control-input custom-control-input-success" style={SStyle} id="customSwitch1" />
                            <label className="custom-control-label" for="customSwitch1">Accomplished</label>
                        </div>
                        

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

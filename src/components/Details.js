import React from 'react'

function Details(props) {

    // document.getElementsByClassName("edit_btn").addEventListener('click', editBtn)
    // document.getElementById("delete_btn").addEventListener("click", deleteBtn)

    function editBtn(){   
        prompt("Edit Here")
    } function deleteBtn(e){
        e.preventDefault();
        alert(`Are you sure you want to delete?` + props.name )
    }
    
    return (
        <div>
            <h1>{props.name}</h1>
            <p>
                <span className='details'>Profession:   </span>{props.profession} 
            </p>

            <p>
                <span className='details'> Language:        </span>{props.language}
            </p>
            
            <p>Marital Status:  {props.mariage}</p>
            
            <p>Age :        {props.age}</p>
            
            <p>LG: {props.lg}</p>

            <button className="btn btn-primary" id="edit_btn" onClick={editBtn}>Edit</button> 
            <button className="btn btn-danger" id="delete_btn" onClick={deleteBtn}>Delete</button>
        </div>
    )
}

export default Details

import React from 'react'

const Card = (props) => {
    return (
        <div className='card mx-auto d-block col-sm-6'>
            {props.children}

            
        </div>
    )
}

export default Card


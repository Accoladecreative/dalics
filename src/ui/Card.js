import React from 'react'
import style from './Card.module.css'

const Card = (props) => {
    return (
        <div className='card mx-auto d-block col-sm-8' style={{ marginBottom: "10px", padding: 0 }} >
            <div className={style.card} >
                {props.children}

            </div>


        </div>
    )
}

export default Card


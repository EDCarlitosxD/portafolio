import React from 'react'
import '../../styles/ItemSkill.scss'

function ItemSkill(props) {
    return (
        <div className='skill-item-container'>
            <img loading='lazy' src={props.src} alt={props.nombre} />
            <p className='txt-skill txt text-center'>{props.nombre}</p>
        </div>
    )
}

export { ItemSkill }

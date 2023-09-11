import React from 'react'
import { Link } from 'react-router-dom'



export default function Card (props) {
  return (
    <div >
     <div className='card'>
        <img src={props.film.img_path} alt="" />
        <h4> <Link className='link' to={`filmdetails/${props.film.id}`}> {props.film.title}</Link> </h4>
     </div>
    </div>
  )
}


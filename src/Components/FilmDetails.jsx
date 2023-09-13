import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function FilmDetails({data}) {
  let id=useParams().id
   let film= data.find((item) => {
    return item.id==id
  })
  return (
    
    <div>
      <Link to='/'>Retour</Link>
      
    <h1>  FilmDetails {film.id}</h1>
  
    <iframe width="930" height="523" 
    src={film.video}
    title="Cristiano Ronaldo Unbelievable Free-Kick Goal | Al Nassr vs Abha 2-1 - Highlights &amp; 
    Goals - 2023" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>
    
      </div>
  )
}

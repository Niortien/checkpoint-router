import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function FilmDetails({data}) {
  let id=useParams().id
   let filmId= data.find((item) => {
    return item.id==id
  })
  return (
    
    <div>
      <Link to='/'>Retour</Link>
      
    <h1>  FilmDetails {id}</h1>
    <h3><video src={filmId.video} ></video></h3>
    
      </div>
  )
}

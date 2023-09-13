import React from 'react'
import Card from './Card'

function CardList({data}) {

    
  return (
    <div className="card-list">
         {data.map((f)=>{
             return < Card film={f} key={f.id} />
      })}
    </div>
  )
}

export default CardList
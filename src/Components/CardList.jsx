import React from 'react'
import Card from './Card'

function CardList({data, searchData}) {


  function search(event) {
    searchData(event.target.value)
  }
    
  return (
    <>
      <div className="form">
        <input type="text" className='input' onChange={search}/>
      </div>
    <div className="card-list">

     {data.map((f)=>{
         return < Card film={f} key={f.id} />
      })}
    </div>
    </>
    
  )
}

export default CardList
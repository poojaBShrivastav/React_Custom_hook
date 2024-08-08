import React from 'react'

export default function CardComponent(props) {
    // console.log(props.data)
  return (
    <div className='card'>
        <img src={props.data.thumbnailUrl}/>
         <p>{props.data.title}</p>
          
    </div>
  )
}

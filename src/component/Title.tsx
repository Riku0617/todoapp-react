import React from 'react'



const Title = (props:{title:string,number:number}) => {
  return (
    <div>
      {props.title}
      {props.number}
    </div>
  )
}

export default Title;

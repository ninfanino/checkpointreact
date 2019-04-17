import React from 'react'


const Button = (props) => {
  //let {clickHandler} = props
  return (
    <button type="button" onClick= { props.clickHandler } onKeyPress={props.clickHandler}>
      {props.children}
    </button>
  )
} 


export default Button
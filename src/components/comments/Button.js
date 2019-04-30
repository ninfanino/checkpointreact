import React from 'react'


const Button = (props) => {
  //let {clickHandler} = props
  return (
    <button className="button" type="button" onClick={props.clickHandler}>
    {props.children}
      Enviar
    </button>
  )
} 


export default Button
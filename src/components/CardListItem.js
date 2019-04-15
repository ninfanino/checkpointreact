import React from 'react'

const CardListItem = (props) => {
  let {image, text, unicorn} = props
  return(
    <div class="cardItem">
      <h2>{unicorn}</h2>
      <figure>
        <img src={image}/>
      </figure>
      <object data={text}></object>
    </div>
  )
}

export default CardListItem
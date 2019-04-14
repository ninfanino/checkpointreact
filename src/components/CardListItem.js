import React from 'react'

const CardListItem = (props) => {
  let {image, text} = props
  return(
    <div class="cardItem">
      <figure>
        <img src={image}/>
      </figure>
      <object data={text}></object>
    </div>
  )
}

export default CardListItem
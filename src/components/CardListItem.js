import React from 'react'
import Button from './Button'

const CardListItem = (props) => {
  let {image, text, unicorn, id} = props
  return(
    <div class="cardItem">
      <h2>{unicorn}</h2>
      <figure>
        <img src={image}/>
      </figure>
      <object data={text}></object>
      <Button>
        Vé a {unicorn}
      </Button>
    </div>
  )
}

export default CardListItem
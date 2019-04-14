import React from 'react'
import CardListItem from './CardListItem'

import gaticornio from '../Images/gaticornio.jpg'
import gaticorniotxt from '../Legends/gaticornio.txt'

const CardList = (props) =>{
  return(
    <div>
      <CardListItem
        image={gaticornio}
        text={gaticorniotxt}
      />
    </div>
  )
}

export default CardList
import React from 'react'
import CardListItem from './CardListItem'

import gaticornio from '../Images/gaticornio.jpg'
import gaticorniotxt from '../Legends/gaticornio.txt'
import ornitorrincornio from '../Images/ornitorrincornio.jpg'
import ornitorrincorniotxt from '../Legends/gaticornio.txt'

const CardList = (props) =>{
  return(
    <div>
      <CardListItem
        unicorn='Gaticornio'
        image={gaticornio}
        text={gaticorniotxt}
        id='1'
      />
      <CardListItem
        unicorn='Ornitorrincornio'
        image={ornitorrincornio}
        text={ornitorrincorniotxt}
        id='2'
      />
    </div>
  )
}

export default CardList
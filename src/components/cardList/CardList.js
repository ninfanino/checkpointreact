import React from 'react'
import CardListItem from './CardListItem'

// import gaticornio from '../Images/gaticornio.jpg'
// import gaticorniotxt from '../Legends/gaticornio.txt'
// import ornitorrincornio from '../Images/ornitorrincornio.jpg'
// import ornitorrincorniotxt from '../Legends/gaticornio.txt'

const CardList = (props) =>{
  let {list, clickHandler} = props

  // let listContent = list.map( (image, text, unicorn, id) => {
  //   return(
  //     <ListItem
  //     key={id}
  //     id={id}
  //     index={index}
  //     //removeItemFromList={()=>{removeItemFromList(index)}}
  //     //markAsCompleted={()=>{markAsCompleted(index)}}
  //     />
  console.log('CardList props', props)
  let listContent = list.map( (item, index) =>{
    console.log('Id: ', index, ', Image: ', item)
    return(
      <CardListItem
        key={index}
        item={item}
        clickHandler={()=>{clickHandler(index)}}
        />
    )
  })

  return(
    <div>
      {listContent}
    </div>
  )
  //   <div>

  //     {/* <CardListItem
  //       unicorn='Gaticornio'
  //       image={gaticornio}
  //       text={gaticorniotxt}
  //       id='1'
  //     />
  //     <CardListItem
  //       unicorn='Ornitorrincornio'
  //       image={ornitorrincornio}
  //       text={ornitorrincorniotxt}
  //       id='2'
  //     /> */}
  //   </div>
  // )
}

export default CardList
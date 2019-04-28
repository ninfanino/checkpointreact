import React from 'react'
import { Route, Link } from 'react-router-dom';



const CardListItem = (props) => {
  let {item, clickHandler} = props
  console.log('CardListItem: ', item, item.image, item.text )
  return(
    <div className="cardItem">
      <h2>{item.unicorn}</h2>
      <figure>
        <img src={item.image}
        //"../Images/gaticornio.jpg"
        //{item.image}
        />
      </figure>
      <object data={item.text}></object>
      <div className="button">
        Vé a 
        <Link to={`/view/${item.id}`}> {item.unicorn}</Link>
        {/* <Route 
          //path={`/view/${item.id}`}
          path="/view/:id"
          render={(props) => 
            <View {...props} 
              item={item} clickHandler={clickHandler} 
            />}
        /> */}
      </div>
      {/* <Route path="/view/:id" component={View}/> */}
    </div>
  )
}

export default CardListItem
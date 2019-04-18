import React from 'react'
import { Route, Link } from 'react-router-dom';
import Button from './Button'
import View from './View'

const CardListItem = (props) => {
  let {item, clickHandler} = props
  console.log('CardListItem: ', item, item.image, item.text )
  return(
    <div className="cardItem">
      <h2>{item.unicorn}</h2>
      <figure>
        <img src={require(`${item.image}`)} 
        //"../Images/gaticornio.jpg"
        //{item.image}
        />
      </figure>
      <object data={require(`${item.text}`)}></object>
      <Button>
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
      </Button>
      {/* <Route path="/view/:id" component={View}/> */}
    </div>
  )
}

export default CardListItem
import React from 'react'
import Textarea from '../components/comments/Textarea'
import Button from '../components/comments/Button'
import Comments from '../containers/Comments'

const View = (props) => {
	let {list, clickHandler} = props
	console.log(props.match.params.id);
	let index = props.match.params.id - 1
	console.log('View List: ', list[index])
	let item = list[index]

	return (
		<div className="home-intro view">
		<div className="cardItem">
      <h2>{item.unicorn}</h2>
      <figure>
        <img src={item.image} 
        />
      </figure>
      <object data={item.text}></object>
			<div>
				<h2>Deja tu comentario:</h2>
				<Textarea/>
				<Button />

				<Comments />
			</div>
    </div>
    </div>
	)
}

export default View
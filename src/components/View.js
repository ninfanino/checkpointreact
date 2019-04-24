import React from 'react'

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
        <img src={require(`${item.image}`)} 
        />
      </figure>
      <object data={require(`${item.text}`)}></object>
			<div>
				<h2>Deja tu comentario:</h2>
				<div>
					Los comentarios van aqui!!
				</div>
			</div>
    </div>
    </div>
	)
}

export default View
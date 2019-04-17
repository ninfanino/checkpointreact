import React from 'react'
import CardList from './CardList'

const Home = (props) => {
	let {list, clickHandler}=props
	console.log('Home props', props)
	return (
		<div>
			<h2>Bienvenido!</h2>
			<p>Descubre la historia de cada unicornio aqui:</p>
			<CardList
			  clickHandelr={clickHandler}
				list={list}/>
		</div>
	)
}

export default Home
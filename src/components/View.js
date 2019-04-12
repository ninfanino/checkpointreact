import React from 'react'

const View = (props) => {
	console.log(props.match.params.id);
	return (
		<h2>View</h2>
	)
}

export default View
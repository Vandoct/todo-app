import React from 'react'
import './Loading.css'

export default class Loading extends React.Component {
	render() {
		return (
			<div className="loading justify-content-center align-items-center">
				<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
			</div>
		);
	}
}
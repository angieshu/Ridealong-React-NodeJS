import React, { Component } from 'react';

import '../css/App.css';

import Customer from './Customer';
import EnterCustomer from './EnterCustomer';

class Error extends Component {

	state = {
		sec: 4
	}

	constructor() {
		super();
		this.timer = 0;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			let sec = this.state.sec - 1;
			this.setState({ sec});

			if (sec === 0) {
				this.props.clearCustomerName();
				clearInterval(this.timer);
			}
		}, 1000);

	}

	render() {
		return (
			<div className="App">
				<p className="hello-hello">Oops...</p>
				<p className="hello-please">{this.props.msg}</p>
				<p className="try-again">Please try again later!</p>
				<p className="countdown">The page will be reloaded in {this.state.sec} sec..</p>
			</div>
		);
	}
}

export default Error;

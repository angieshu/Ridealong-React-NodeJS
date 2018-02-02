import React, { Component } from 'react';

// import '../css/App.css';

class Header extends Component {

	state = {
		customerName: "",
	}

	handleClick() {
		// this.setState({ customerName: document.getElementById('customerName').value });
	}

	render() {
		return (
			<div className="header">
				{this.props.header}
				{this.props.header === 'Customer Info' ?
					<div>
						<button className="btn-sign-out">Sign Out</button>
					</div> : ""
				}
			</div>
		);
	}
}

export default Header;

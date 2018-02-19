import React, { Component } from 'react';

// import '../css/App.css';

class Header extends Component {

	handleClick() {
		this.props.clearCustomerName();
	}

	render() {
		return (
			<div className="header">
				{this.props.header}
				{this.props.header === 'Customer Info' ?
					<div>
						<button onClick={this.handleClick.bind(this)} className="btn-sign-out">Sign Out</button>
					</div> : ""
				}
			</div>
		);
	}
}

export default Header;

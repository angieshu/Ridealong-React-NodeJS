import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import '../css/App.css';

class EnterCustomer extends Component {

	handleClick() {
		// console.log('here');
		this.props.handleCustomerName(document.getElementById('customerName').value);
		// this.setState({ customerName: document.getElementById('customerName').value });
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<p className="hello-hello">Hello!</p>
					<p className="hello-please">Please enter Company Name:</p>
					<br />
					<TextField
						id="customerName"
						hintText="Company Name"
						floatingLabelText="Company Name"
						inputStyle={{ color: `#175092` }}
						underlineStyle={{ borderColor: `#175092` }}
						underlineFocusStyle={{ display: `none` }}
						floatingLabelStyle={{ color: `#175092` }}
					/>
					<br />
					<button className="ok-btn" onClick={this.handleClick.bind(this)}>OK!</button>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default EnterCustomer;

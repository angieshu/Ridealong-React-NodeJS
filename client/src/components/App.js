import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import '../css/App.css';

import Customer from './Customer';
import EnterCustomer from './EnterCustomer';

class App extends Component {

	state = {
		customerName: "",
		error: ""
	}

	componentDidMount() {
		// document.body.style.backgroundColor = `#175092`;
	}

	handleCustomerName(customerName) {
		// console.log('intht eapp');
		this.setState({ customerName: customerName });
	}

	clearCustomerName() {
		this.setState({ customerName: "" });
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					{this.state.customerName === "" ?
						<EnterCustomer handleCustomerName={this.handleCustomerName.bind(this)} /> :
						<Customer clearCustomerName={this.clearCustomerName.bind(this)} customerName={this.state.customerName} />
					}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;

import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import '../css/App.css';

import Customer from './Customer';

class App extends Component {

	state = {
		customerName: "",
	}

	handleClick() {
		this.setState({ customerName: document.getElementById('customerName').value });
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					{this.state.customerName === "" ?
						<div>
							<TextField
								id="customerName"
								hintText="Account Name"
								floatingLabelText="Account Name"
								inputStyle={{ color: `#383838` }}
								underlineStyle={{ borderColor: `red` }}
								underlineFocusStyle={{ display: `none` }}
								floatingLabelStyle={{ color: `red` }}
							/>
							<button onClick={this.handleClick.bind(this)}>OK!</button>
						</div> :
						<Customer customerName={this.state.customerName} />
					}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;

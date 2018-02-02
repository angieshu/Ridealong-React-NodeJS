import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import '../css/App.css';

const styles = {
	fadeIn: {
		animation: 'x 3s',
		animationName: Radium.keyframes(fadeIn, 'fadeIn')
	}
};

class EnterCustomer extends Component {

	handleClick() {
		this.props.handleCustomerName(document.getElementById('customerName').value);
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<StyleRoot>
						<div style={styles.fadeIn}>
								<p className="hello-hello">Hello!</p>
								<p className="hello-please">Please enter Company Name:</p>
								<br />
						</div>
					</StyleRoot>
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

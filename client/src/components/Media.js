import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import '../css/App.css';

class Media extends Component {

	state = {
		customerName: "",
	}

	handleClick() {
		// this.setState({ customerName: document.getElementById('customerName').value });
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					{this.props.media.map(el =>
						<div key={el.__pkAssestsID}>
							<img src={el.Media} alt=""/>
						</div>
					)}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Media;

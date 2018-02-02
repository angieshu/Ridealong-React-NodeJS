import React, { Component } from 'react';
import axios from 'axios';
// import '../css/App.css';

import Media from './Media';
import Error from './Error';

class Customer extends Component {

	state = {
		info: [],
		media: [],
		error: "",
		errorCode: -1
	}

	componentDidMount() {

		let data = {
			customerName: this.props.customerName
		}

		axios({
			method: 'post',
			url: '/customer',
			data: data
		}).then((res) => {
			return res.data;
		}).then((res) => {
			if (res === "") {
				this.setState({
					error: `${this.props.customerName} not found!`,
					errorCode: 401
				});
			} else if (res.errorCode === 0) {
				this.setState({
					info: res.info,
					media: res.media,
					errorCode: 0
				});
			} else {
				this.setState({ error: 'An error occured.' });
			}
		}).catch((e) => this.setState({ error: 'An error occured.'}));
	}

	// clearData() {
	// 	this.setState({})
	// }

	clearCustomerName() {
		this.props.clearCustomerName();
	}

	render() {
		let errorCode = this.state.errorCode;
		return (
			<div className="App">
				{errorCode === -1 ?
					<div> Loading... </div> :
					<div>{errorCode !== 0 ?
						<Error clearCustomerName={() => this.clearCustomerName()} msg={this.state.error} /> :
						<div>
							Name: {this.state.info.CustomerName}
							<br/>
							Division: {this.state.info.Division}
							<br/>
							Roles: {this.state.info.RolesDisplay}
							<Media media={this.state.media} />
						</div>
					}</div>
				}
			</div>
		);
	}
}

export default Customer;

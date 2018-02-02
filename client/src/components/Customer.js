import React, { Component } from 'react';
import axios from 'axios';
// import '../css/App.css';

class Customer extends Component {

	state = {
		info: [],
		media: [],
		error: ""
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
			if (res.errorCode === 401) {
				this.setState({ error: `Company Name ${this.state.customerName} not found!`});
			} else if (res.errorCode === 0) {
				this.setState({
					info: res.info,
					media: res.media
				});
			} else {
				this.setState({ error: 'An error occured.' });
			}
		}).catch((e) => this.setState({ error: 'An error occured.'}));
	}

	render() {
		return (
			<div className="App">
				{this.state.info.length === 0 ?
					<div> Loading... </div> :
					<div>
						Name: {this.state.info.CustomerName}
						<br/>
						Division: {this.state.info.Division}
						<br/>
						Roles: {this.state.info.RolesDisplay}
					</div>
				}
			</div>
		);
	}
}

export default Customer;

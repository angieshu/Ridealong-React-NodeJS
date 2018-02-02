import React, { Component } from 'react';
import axios from 'axios';
// import '../css/App.css';

import Media from './Media';
import Error from './Error';
import Header from './Header';

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
							<Header header="Customer Info" />
							<div className="customer-info">
								<div className="customer-info-line">
									<p className="line-header">NAME</p>
									<p>{this.state.info.CustomerName}</p>
								</div>
								<br/>
								<div className="customer-info-line">
									<p className="line-header">DIVISION</p>
									<p>{this.state.info.Division}</p>
								</div>
								<br/>
								<div className="customer-info-line">
									<p className="line-header">ROLES</p>
									<p>{this.state.info.RolesDisplay}</p>
								</div>
							</div>
							<br/>
							<Header header="Media Gallery" />
							<Media media={this.state.media} />
						</div>
					}</div>
				}
			</div>
		);
	}
}

export default Customer;

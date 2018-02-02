import React, { Component } from 'react';

// import '../css/App.css';

import Images from './Images';

class Media extends Component {

	state = {
		customerName: "",
	}

	handleClick() {
		// this.setState({ customerName: document.getElementById('customerName').value });
	}

	render() {
		return (
			<div>
				<Images media={this.props.media} category="Paper & Stationary"/>
				<Images media={this.props.media} category="Checklist & Forms"/>
				<Images media={this.props.media} category="Data Display"/>
				<Images media={this.props.media} category="Notifications & Alerts"/>
				<Images media={this.props.media} category="Data Entry"/>
				<Images media={this.props.media} category="Navigation & Tracking"/>
				<Images media={this.props.media} category="Scheduling & Scanning"/>
				<Images media={this.props.media} category="Communication & Collaboration"/>
				<Images media={this.props.media} category="Training & Evaluating"/>
				<Images media={this.props.media} category="Health, Safety & Wellness"/>
				<Images media={this.props.media} category="Surveillance & Monitoring"/>
			</div>
		);
	}
}

export default Media;

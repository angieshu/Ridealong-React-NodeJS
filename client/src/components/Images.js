import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import { Player } from 'video-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "../../node_modules/video-react/dist/video-react.css";

import playBtn from '../img/play-button.png';

class Media extends Component {

	state = {
		openImg: false,
		openVideo: false,
		img: {},
	}
	handleClick() {
		// this.setState({ customerName: document.getElementById('customerName').value });
	}

	openImg(img) {
		this.setState({
			openImg: true,
			img: img
		});
	}

	closeImg() {
		this.setState({
			openImg: false,
			// img: ""
		});
	}

	openVideo(img) {
		this.setState({
			openVideo: true,
			img: img
		});
	}

	closeVideo() {
		this.setState({
			openVideo: false,
			// img: ""
		});
	}

	render() {
		let category = this.props.category;
		let media = this.props.media.filter(el => el.Category === category);

		return (
			<MuiThemeProvider>
				<div className="App">
					{media.length === 0 ? "" :
						<div className="media">
							<p className="media-category">{category}</p>
							<div className="media-container">
								{media.map((el, index) =>
									<div key={index}>
										{el.Media.indexOf('mov') >= 0 ?
											<button className="media-btn" onClick={() => this.openVideo(el)}>
												<img className="media-img-play" src={playBtn} alt=""/>
											</button> :
											<button className="media-btn" onClick={() => this.openImg(el)}>
												<img className="media-img" src={el.Media} alt=""/>
											</button>
										}
									</div>
								)}
							</div>
						</div>
					}
					<Dialog
						title={category}
						modal={false}
						open={this.state.openImg}
						onRequestClose={this.closeImg.bind(this)}
					>
						<img className="dialog-img" src={this.state.img.Media} alt=""/>
						<p>{this.state.img.Notes}</p>
					</Dialog>
					<Dialog
						title={this.state.img.SubCategory}
						modal={false}
						open={this.state.openVideo}
						onRequestClose={this.closeVideo.bind(this)}
					>
						<Player>
							<source src={this.state.img.Media} />
						</Player>
						<p>{this.state.img.Notes}</p>
					</Dialog>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Media;

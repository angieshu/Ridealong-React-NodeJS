import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import { Player } from 'video-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "../../node_modules/video-react/dist/video-react.css";

import playBtn from '../img/play-button.png';
import leftArrow from '../img/left-arrow.png';
import rightArrow from '../img/right-arrow.png';

class Media extends Component {

	state = {
		showRightArrow: true,
		showLeftArrow: false,
		openCategory: false,
		openImg: false,
		openVideo: false,
		img: {},
		index: 0,
		category: this.props.category,
		media: this.props.media.filter(el => el.Category === this.props.category),
		len: 0
	}

	componentDidMount() {
		this.setState({ len: this.state.media.length });
	}

	onLeftClick() {
		if (this.state.index === 1) {
			this.setState({
				showLeftArrow: false,
				showRightArrow: true,
				img: this.state.media[this.state.index - 1],
				index: this.state.index - 1
			});
		} else {
			this.setState({
				showRightArrow: true,
				img: this.state.media[this.state.index - 1],
				index: this.state.index - 1
			});

		}
	}

	onRightClick() {
		if (this.state.index === this.state.len - 2) {
			this.setState({
				showRightArrow: false,
				showLeftArrow: true,
				img: this.state.media[this.state.index + 1],
				index: this.state.index + 1
			});
		} else {
			this.setState({
				showLeftArrow: true,
				img: this.state.media[this.state.index + 1],
				index: this.state.index + 1
			});

		}
	}

	openCategory() {
		if (this.state.len === 1) {
			this.setState({
				img: this.state.media[0],
				index: 0,
				openCategory: true,
				showLeftArrow: false,
				showRightArrow: false,
			});
		} else if (this.state.len > 1) {
			this.setState({
				img: this.state.media[0],
				index: 0,
				openCategory: true,
				showLeftArrow: false,
				showRightArrow: true,
			});

		}
	}

	closeCategory() {
		this.setState({ openCategory: false });
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
		return (
			<MuiThemeProvider>
				<div className="App">
					{this.state.len === 0 ? "" :
						<div className="media">
							<button className="media-btn-category" onClick={this.openCategory.bind(this)}>
								<p className="media-category">{this.state.category}</p>
							</button>
							<div className="media-container">
								{this.state.media.map((el, index) =>
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
					{this.state.img === undefined || this.state.img.Media === undefined ? "" :
						<div>
							<Dialog
								title={this.state.img.SubCategory}
								modal={false}
								open={this.state.openCategory}
								onRequestClose={this.closeCategory.bind(this)}
								autoScrollBodyContent={true}
							>
								<div className="category-dialog">
									{this.state.showLeftArrow ?
										<button className="arrow-btn-btn" onClick={this.onLeftClick.bind(this)}>
											<img className="arrow-btn" src={leftArrow} alt=""/>
										</button> : ""
									}
									{this.state.img.Media.indexOf('mov') >= 0 ?
										<Player>
											<source src={this.state.img.Media} />
										</Player> :
										<img className="dialog-img" src={this.state.img.Media} alt=""/>
									}
									{this.state.showRightArrow ?
										<button className="arrow-btn-btn" onClick={this.onRightClick.bind(this)}>
										<img className="arrow-btn" src={rightArrow} alt=""/>
										</button> : ""
									}
									<p>{this.state.img.Notes}</p>
								</div>
							</Dialog>
							<Dialog
								title={this.state.img.SubCategory}
								modal={false}
								open={this.state.openImg}
								onRequestClose={this.closeImg.bind(this)}
								autoScrollBodyContent={true}
							>
								<img className="dialog-img" src={this.state.img.Media} alt=""/>
								<p>{this.state.img.Notes}</p>
							</Dialog>
							<Dialog
								title={this.state.img.SubCategory}
								modal={false}
								open={this.state.openVideo}
								onRequestClose={this.closeVideo.bind(this)}
								autoScrollBodyContent={true}
							>
								<Player>
									<source src={this.state.img.Media} />
								</Player>
								<p>{this.state.img.Notes}</p>
							</Dialog>
						</div>
					}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Media;

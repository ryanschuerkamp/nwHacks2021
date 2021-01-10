import React, { Component } from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './css/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: ""};
	}

	callAPI() {
		fetch("http://localhost:8000/testAPI")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res}))
			.catch(err => err);
	}

	componentDidMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h3>APP NAME</h3>
					<h5>TOP TWEETS</h5>
					<TwitterTweetEmbed tweetId={'933354946111705097'}/>
					{this.children}
					<p className="App-intro">{this.state.apiResponse}</p>
				</header>
			</div>
		);
	}
}

export default App;

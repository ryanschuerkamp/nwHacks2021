import React, { Component } from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './css/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: ""};
	}

	

	callAPI() {
		
		var outside
		fetch("http://localhost:8000/wordCloud" )
		.then(response => response.blob())
		.then(images => {
				// Then create a local URL for that image and print it 
				outside = URL.createObjectURL(images)
				console.log(outside)})
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

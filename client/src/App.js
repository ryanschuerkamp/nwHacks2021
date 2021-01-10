import React, { Component } from "react";
import { Tweet  } from 'react-twitter-widgets';
import './css/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: ""};
	}

	callAPI() {
		fetch("http://localhost:8000/word-cloud")
			.then(res => res.blob())
			.then(function(myBlob) {
				var objectURL = URL.createObjectURL(myBlob);
				document.getElementById('wordCloud').src = objectURL;
			})
			.catch(err => err);
	}

	componentDidMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className="App">
				<h3 className="App-title">COVAX (mis)Information</h3>
				<h5 className="App-heading">TOP TWEETS</h5>
				<div className="App-flex-container">
					<Tweet tweetId='1343271342985019393' options={{width: '750'}} className="App-twitter-embed"/>
					<Tweet tweetId='1340087528838344704' options={{width: '750'}} className="App-twitter-embed"/>
					<Tweet tweetId='1336491671505268742' options={{width: '750'}} className="App-twitter-embed"/>
				</div>
				<h5 className="App-heading">WORD CLOUD</h5>
				<div className="App-flex-container">
					<img src="" id="wordCloud" alt=""></img>
				</div>
			</div>
		);
	}
}

export default App;

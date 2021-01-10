import React, { Component } from "react";
import { Tweet  } from 'react-twitter-widgets';
import './css/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: ""};
	}

	getWordCloud() {
		fetch("http://localhost:8000/word-cloud")
			.then(res => res.blob())
			.then(function(myBlob) {
				var objectURL = URL.createObjectURL(myBlob);
				document.getElementById('Word-cloud').src = objectURL;
			})
			.catch(err => err);
	}

	getVisualsThemes() {
		fetch("http://localhost:8000/visuals-themes")
			.then(res => res.blob())
			.then(function(myBlob) {
				var objectURL = URL.createObjectURL(myBlob);
				document.getElementById('Visuals-themes').src = objectURL;
			})
			.catch(err => err);
	}

	getVisualsPie() {
		fetch("http://localhost:8000/visuals-pie")
			.then(res => res.blob())
			.then(function(myBlob) {
				var objectURL = URL.createObjectURL(myBlob);
				document.getElementById('Visuals-pie').src = objectURL;
			})
			.catch(err => err);
	}

	componentDidMount() {
		this.getWordCloud();
		this.getVisualsThemes();
		this.getVisualsPie();
	}

	render() {
		return (
			<div className="App">
				<h2 className="App-title">COVAX (mis)Info</h2>
				<h4 className="App-heading">TOP TWEETS</h4>
				<div className="App-flex-container">
					<Tweet tweetId='1343271342985019393' options={{width: '550'}} className="App-twitter-embed"/>
					<Tweet tweetId='1340087528838344704' options={{width: '550'}} className="App-twitter-embed"/>
					<Tweet tweetId='1336491671505268742' options={{width: '550'}} className="App-twitter-embed"/>
				</div>

				<h4 className="App-heading">WORD ANALYSIS</h4>
				<div className="App-flex-container">
					<img src="" id="Word-cloud" className="App-visuals" alt=""></img>
				</div>
				
				<h4 className="App-heading">SENTIMENTS BAR CHART</h4>
				<div className="App-flex-container">
					<img src="" id="Visuals-themes" className="App-visuals" alt=""></img>
				</div>

				<h4 className="App-heading">PEOPLE MENTIONED PIE CHART</h4>
				<div className="App-flex-container">
					<img src="" id="Visuals-pie" className="App-visuals" alt=""></img>
				</div>

				<h4 className="App-heading">STAY INFORMED</h4>
				<div className="App-para-container">
					<p>For current scientific information regarding 
					the vaccines please select your country below.</p>
					<div>
						<a className="App-link" href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/vaccines.html?&utm_campaign=hc-sc-covidvaccine&utm_medium=sem&utm_source=ggl&utm_content=ad-text-en&utm_term=covid%2019%20vaccines&adv=2021-0051&id_campaign=11503036027&id_source=113997067404&id_content=487727621650">CANADA</a>
						<a className="App-link" href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/8-things.html#:~:text=COVID%2D19%20vaccination%20will%20help,offer%20against%20this%20serious%20disease.">USA</a>
					</div>
				</div>
				
			</div>
		);
	}
}

export default App;

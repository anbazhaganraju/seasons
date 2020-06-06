import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

class App extends React.Component {
	state = { lat: null, errorMsg: "" };

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(pos) => this.setState({ lat: pos.coords.latitude }),
			(err) => this.setState({ errorMsg: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMsg && !this.state.lat) {
			return <div>Error: {this.state.errorMsg}</div>;
		}

		if (!this.state.errorMsg && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Loading message="Please allow Location Access" />;
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

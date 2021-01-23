/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
//   return <div>Hi There!</div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // We can take state from one component and pass it down to a child as a prop

  renderContent() {
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Error: {this.state.errorMessage}
          </h1>
        </div>
      );
    }
    return <Spinner message="Please accept the network request." />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

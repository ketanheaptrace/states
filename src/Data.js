import React from "react";
class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "react",
      role: "abc technology",
      city: "pune"
    };
  }
  updateState() {
    this.setState({
      city: "banglore"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.language}</h1>
        <h1>{this.state.role}</h1>
        <h1>{this.state.city}</h1>
        <button
          onClick={() => {
            this.updateState();
          }}
        >
          Update City
        </button>
      </div>
    );
  }
}
export default Data;

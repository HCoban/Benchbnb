import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.requestBenches();
    console.log("benches requested");
  }

  render() {
    const benches = Object.keys(this.props.benches).map((key) => {
      return (
        <li key={key}>{this.props.benches[key].description}</li>
      );
    });

    return (
      <ul className="BenchIndex">{benches}</ul>
    );
  }
}

export default BenchIndex;

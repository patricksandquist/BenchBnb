<<<<<<< HEAD
window.BenchesIndex = React.createClass({
  _onChange: function () {
    // debugger;
=======
/* global React, BenchStore */

window.BenchesIndex = React.createClass({
  _onChange: function () {
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
    this.setState({ benches: BenchStore.all() });
  },

  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    // Add a listener and grab the benches
    BenchStore.addChangeListener(this._onChange);
<<<<<<< HEAD
    // ApiUtil.fetchBenches();
=======
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this._onChange);
  },

  render: function () {
    if (this.state.benches.length !== 0) {
      return (
<<<<<<< HEAD
        <ul>
          {this.state.benches.map(function (bench) {
            return <li key={bench.id}>{bench}</li>;
          })}
        </ul>
=======
        <ol>
          {this.state.benches.map(function (bench) {
            return <li key={bench.id}>{bench.description} [{bench.seating}]</li>;
          })}
        </ol>
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
      );
    } else {
      return <ul className="no-benches"></ul>;
    }
  }
});

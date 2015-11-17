<<<<<<< HEAD
window.Search = React.createClass({
  render: function () {
    return (
      <div>
        <Map/>
=======
/* global ApiUtil, FilterParamsStore, React, Map, BenchesIndex, BenchStore, FilterParams */

window.Search = React.createClass({
  getInitialState: function () {
    return {bounds: {}, minSeating: 0, maxSeating: 10};
  },

  _onChange: function () {
    var paramsArray = FilterParamsStore.getParams();
    this.setState({
      bounds: paramsArray[0],
      minSeating: paramsArray[1],
      maxSeating: paramsArray[2]
    });

    ApiUtil.fetchBenches();
  },

  componentDidMount: function () {
    FilterParamsStore.addChangeListener(this._onChange);
  },

  handleMapClick: function (coords) {
    this.props.history.pushState(null, "benches/new", coords);
  },

  render: function () {
    return (
      <div>
        <Map clickFunction={this.handleMapClick}/>
        <FilterParams minSeats={this.state.minSeating} maxSeats={this.state.maxSeating}/>
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
        <BenchesIndex benches={BenchStore.all()}/>
      </div>
    );
  }
});

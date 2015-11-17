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

  handleMapClick: function (latlng) {
    var coords = {lat: latlng.lat(), lng: latlng.lng()};
    this.props.history.pushState(null, "benches/new", coords);
  },

  render: function () {
    return (
      <div>
        <Map clickFunction={this.handleMapClick}/>
        <FilterParams minSeats={this.state.minSeating} maxSeats={this.state.maxSeating}/>
        <BenchesIndex benches={BenchStore.all()}/>
      </div>
    );
  }
});

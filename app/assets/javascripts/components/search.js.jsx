/* global React, Map, BenchesIndex, BenchStore */

window.Search = React.createClass({
  handleMapClick: function (coords) {
    this.props.history.pushState(null, "benches/new", coords);
  },

  render: function () {
    return (
      <div>
        <Map clickFunction={this.handleMapClick}/>
        <BenchesIndex benches={BenchStore.all()}/>
      </div>
    );
  }
});

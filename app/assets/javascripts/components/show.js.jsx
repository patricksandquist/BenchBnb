/* global React, Map */

window.BenchShow = React.createClass({
  render: function () {
    var benchId = parseInt(this.props.location.query.id);
    return (
      <div>
        <Map clickFunction={false} singleBench={this.state.bench}/>
      </div>
    );
  }
});

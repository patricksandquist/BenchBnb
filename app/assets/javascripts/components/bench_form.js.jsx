window.BenchForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var inputBench = {
      description: e.target[0].value,
      lat: parseFloat(e.target[1].value),
      lng: parseFloat(e.target[2].value),
      seating: parseInt(e.target[3].value)
    };

    ApiUtil.createBench(inputBench);
    this.props.history.pushState(null, "/");
  },

  handleCancel: function (e) {
    this.props.history.pushState(null, "/");
  },

  render: function () {
    var clickLat = parseFloat(this.props.location.query.lat);
    var clickLng = parseFloat(this.props.location.query.lng);
    return (
      <div>
        <h2>Add a bench!</h2>
        <form action="" onSubmit={this.handleSubmit}>
          Description: <input id='description' type='text'/><br></br>
          Latitude:    <input id='latitude' type='number' step='0.001' value={clickLat}/><br></br>
          Longitude:   <input id='longitude' type='number' step='0.001' value={clickLng}/><br></br>
          Seating:     <input id='seating' type='number' step='1'/><br></br>
          <input type='submit' value='Add bench'/>
        </form>
        <input type='submit' onClick={this.handleCancel} value='Back'/>
      </div>
    );
  }
});

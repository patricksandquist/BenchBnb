window.FilterParams = React.createClass({
  _onChange: function (e) {
    if (e.target.name === "minSeats") {
      FilterParamsActions.receiveSeatingRange(
        parseInt(e.target.value),
        this.props.maxSeats
      );
    } else {
      FilterParamsActions.receiveSeatingRange(
        this.props.minSeats,
        parseInt(e.target.value)
      );
    }

    ApiUtil.fetchBenches();
  },

  componentDidMount: function () {
    FilterParamsActions.receiveSeatingRange(
      this.props.minSeats,
      this.props.maxSeats
    );
  },

  render: function () {
    return (
      <div>
        <br></br>
        Min Seats
        <input type='number' name="minSeats" min="0" step="1" value={this.props.minSeats} onChange={this._onChange}/>
        <br></br>
        Max Seats
        <input type='number' name="maxSeats" min="0" step="1" value={this.props.maxSeats} onChange={this._onChange}/>
        <br></br>
      </div>
    );
  }
});

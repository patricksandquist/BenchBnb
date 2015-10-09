window.Map = React.createClass({
  _onChange: function () {
    var _markers = [];
    BenchStore.all().forEach(function (bench) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(bench.lat, bench.lng),
        map: this.map,
        title: bench.description
      });
      _markers.push(marker);
    }.bind(this));
  },

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };

    BenchStore.addChangeListener(this._onChange);
    this.map = new google.maps.Map(map, mapOptions);
  },

  render: function () {
    return <div className='map' ref='map'></div>;
  }
});

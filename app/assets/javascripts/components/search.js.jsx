window.Search = React.createClass({
  render: function () {
    return (
      <div>
        <Map/>
        <BenchesIndex benches={BenchStore.all()}/>
      </div>
    );
  }
});

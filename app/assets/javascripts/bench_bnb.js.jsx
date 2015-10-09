$(function () {
  React.render(
    <BenchesIndex benches={BenchStore.all()}/>,
    document.getElementById('content')
  );
});

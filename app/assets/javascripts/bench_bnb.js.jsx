<<<<<<< HEAD
$(function () {
  React.render(
    <Search/>,
    document.getElementById('content')
  );
=======
/* global ReactRouter, React, Search, BenchForm */

$(function () {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
          <div>
            <header><h1>Bench BnB</h1></header>
            <p>Click anywhere on the map to create a new bench!</p>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path='/' component={App}>
        <IndexRoute component={Search}/>
        <Route path='benches/new' component={BenchForm}/>
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
});

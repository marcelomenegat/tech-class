
var IndexRoute = require('react-router/lib/IndexRoute')
var React = require('react')
var Route = require('react-router/lib/Route')
//var Item = require('./Item')
// Polyfill require.ensure
if (typeof require.ensure !== 'function') require.ensure = function(d, c) { c(require) }

var App = require('./App')
//var Stories = require('./Stories')
//var Updates = require('./Updates')

function stories(route, type, limit, title) {
  return React.createClass({
    render() {
      //return <Stories {...this.props} key={route} route={route} type={type} limit={limit} title={title}/>
    }
  })
}

function updates(type) {
  return React.createClass({
    render() {
      //return <Updates {...this.props} key={type} type={type}/>
    }
  })
}

var filtered = stories('ask', 'askstories', 200, 'Ask')
module.exports = <Route path="/" component={App}>
  <IndexRoute component={App}/>
  <Route path="filter/:filter" component={filtered}/>
  
</Route>

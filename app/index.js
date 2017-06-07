var React = require('react');
var ReactDOM = require('react-dom');
require('./style.css')


// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    return (
      <div>
        Hello!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
var React = require('react');
var MainHeader = require('./main_header.jsx');
var MainList = require('./main_list.jsx');

var View = React.createClass({
  render: function() {
    return (
      <div>
        <MainHeader />
        <MainList />
      </div>
    )
  }
})

module.exports = View;
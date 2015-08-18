var React = require('react');
var Post  = require('./post.jsx');

var List = React.createClass({
  render: function() {
    return (
      <div> 
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
})

module.exports = List;
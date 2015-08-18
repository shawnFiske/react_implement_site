var React = require('react');

var Post = React.createClass({
  render: function() {
    return (
      <div>
        <h5># Header</h5>
        <ul>
          <li># points by author 1 hour ago</li>
          <li>|</li>
          <li># comments</li>
        </ul>
      </div>
    )
  }
})

module.exports = Post;
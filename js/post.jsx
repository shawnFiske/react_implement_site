var React = require('react');

var Post = React.createClass({
  render: function() {
    return (
      <li>
        <p>{this.props.post.count}. {this.props.post.title}</p>
        <p>{this.props.post.points}points by{this.props.post.author} {this.props.post.time} hour ago | {this.props.post.comments} comments</p>
      </li>
    )
  }
})

module.exports = Post;
var React = require('react');
var Post  = require('./post.jsx');

var List = React.createClass({
  render: function() {
    {
      var ourList = this.props.posts.map(function(dataObj){
        return <Post post={dataObj} />
      })
    }
    return (
      <section>
        <ul>
          { ourList }
        </ul>
      </section>
    )
  }
})

module.exports = List;
var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <span><b>Hacker News</b></span>
        <span></span>
        <span>new</span>
        <span>|</span>
        <span>comments</span>
        <span>|</span>
        <span>show</span>
        <span>|</span>
        <span>ask</span>
        <span>|</span>
        <span>jobs</span>
        <span>|</span>
        <span>submit</span>
        <span>login</span>
      </div>
    )
  }
})

module.exports = Header;
var React = require('react');
var List  = require('./main_list.jsx');

var MainListContainer = React.createClass({
  getInitialState: function(){
     return {
       posts: [
         {count: 1, title: "Multiple Vulnerabilities in Pocket",  points:"103", author: "ers35", time: 1, comments:21},
         {count: 2, title: "LuaJIT project governance",  points:"103", author: "ers35", time: 1, comments:21},
         {count: 3, title: "How I came to find Linux",  points:"103", author: "ers35", time: 1, comments:21},
         {count: 4, title: "US Patent 9085897: Space elevator",  points:"103", author: "ers35", time: 1, comments:21},
         {count: 5, title: "Working Toward Bret Victor's “Learnable Programming",  points:"103", author: "ers35", time: 1, comments:21},
         {count: 6, title: "Show HN: Stackie – A tiny stack machine for texture generation",  points:"103", author: "ers35", time: 1, comments:21},
       ]
     }
   },

   render: function() {
     return (
       <List posts={this.state.posts} />
     )
   }
})

module.exports = MainListContainer;
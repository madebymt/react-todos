var React = require('react');
var Link = require('react-router').Link;

var About = React.createClass({
    render: function(){
        return(
            <div>
                <Link to={"/"}>Home</Link>
                <h2>All about me</h2>
                <p>My name is Ruby, making React app</p>
            </div>
        );
    }
});

module.exports = About;

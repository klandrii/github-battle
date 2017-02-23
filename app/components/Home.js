var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className ='jumbotron col-sm-12 text-center' style={transparentBg}> 
                <h1>Github Battle</h1>
                <p className ='lead'> Battle with style!</p>
                <Link to='/playerOne'>
                    <button type = 'button' className = 'btn btn-lg btn-succes'>Let's do this!</button>
                </Link>
            </div>
        )
    }
});

module.exports = Home;
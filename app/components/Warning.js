var React = require('react');
var PropTypes = React.PropTypes;

var Warning = React.createClass({
    propTypes: {
        text: {
            text: PropTypes.string
        }
    },
    getInitialState: function () {
        return {
            text: 'Warning!'
        }
    },
    render: function () {
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        )
    }
});

module.exports = Warning;
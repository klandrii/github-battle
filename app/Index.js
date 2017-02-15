var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function(){
        return (
            <div> Hello World! This is JSX. Or is it? </div>
        )
    }

});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
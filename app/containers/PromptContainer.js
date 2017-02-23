var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return{
            username: ''
        }
    },
    handleUpdateUser: function (e) {
        this.setState({
            username: e.target.value
        })
    },
    handleSubmitUser: function (e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });
        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routerParams.playerOne,
                    playerTwo: this.state.username
                }
            })
            //go to /battle
        } else {
            this.context.router.push('/playerTwo/' + this.state.username)
        }
    },
    render: function () {
        
        return(
            <Prompt 
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header = {this.props.route.header}
                username={this.state.username}/>
        )}
});

module.exports = PromptContainer;
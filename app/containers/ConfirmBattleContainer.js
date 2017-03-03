var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {isLoading: true, playersInfo: []}
    },
    componentDidMount: function () {
        var query = this.props.location.query;
        if (query.playerOne == query.playerTwo) {
            console.log('Names are equal!');
            this
            .context
            .router
            .push({
                pathname: '/playerOne'});
        } else {
                    githubHelpers
            .getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function (players) {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            }.bind(this));

            console.log('------------------------------------');
            console.log('OK!');
            console.log('------------------------------------');
        }
    },
    handleInitiateBattle: function () {
        this
            .context
            .router
            .push({
                pathname: '/results',
                state: {
                    playersInfo: this.state.playerInfo
                }
            })
    },
    render: function () {
        return (<ConfirmBattle
            isLoading={this.state.isLoading}
            playersInfo={this.state.playersInfo}/>)
    }
});

module.exports = ConfirmBattleContainer;
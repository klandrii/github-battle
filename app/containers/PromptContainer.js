var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: '',
      nameIsFalse: true
    }
  },



  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState
    ({
      username: ''
    });
    if (this.props.routeParams.playerOne)
      {
      if (this.props.routeParams.playerOne == this.state.username)
        {
        this.setState({ nameIsFalse: false });
        this.context.router.push({
          pathname: '/playerTwo'
        });
        return;
        } else {
        this.setState({ nameIsFalse: true });
        
      }; 
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      });
    } else {
      this.context.router.push('/playerTwo/' + this.state.username);
    };
    
  },



  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
  },
  render: function () {
    console.log('current nameIsFale state is ' + this.state.nameIsFalse);
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
        nameIsFalse={this.state.nameIsFalse}/>
    )
  }
});

module.exports = PromptContainer;
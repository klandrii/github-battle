var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('../components/MainContainer');
var Loader = require('semantic-ui-react').Loader;
var Loading = require('../components/Loading');

function StartOver (){
  return (
    <div className='col-sm-12 col-centered ' style={styles.space} >
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-danger'>
            Start Over!
          </button>
        </Link>
      </div>
  )
}

function Results (props){
  if (props.isLoading === true){
    return (
      <div>
        <Loader active inline='centered'/>
        <Loading text='And the winner is' speed={100} />
      </div>
    )
  }
  if(props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver/>
      </MainContainer>
    )
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
  <MainContainer >
    <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2' >
        <UserDetailsWrapper header='Winner'>
          <UserDetails score = {props.scores[winningIndex]} info ={props.playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser' >
          <UserDetails score = {props.scores[losingIndex]} info ={props.playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver/>
  </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
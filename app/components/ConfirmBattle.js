var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Loader = require('semantic-ui-react').Loader;
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');

function ConfirmBattle(props) {
    return props.isLoading === true
        ?<div>
            <Loader active inline='centered'/>
            <Loading speed={800} text='Just a sec'/> 
        </div>
        : <MainContainer>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Player One'>
                    <UserDetails info={props.playersInfo[0]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player Two'>
                    <UserDetails info={props.playersInfo[1]}/>
                </UserDetailsWrapper>
            </div>
            <div className='btn group '>
                <div className='col-sm-12'>
                    <button
                        type='button'
                        className='btn btn-lg btn-success  '
                        onClick={props.onInitiateBattle}>
                        Initiate Battle!
                    </button>
                    <Link to='/playerOne' style={styles.space}>
                        <button
                            type='button'
                            className='btn btn-lg btn-danger  '
                            onClick={props.onInitiateBattle}>
                            Reselect Players
                        </button>
                    </Link>
                </div>
            </div>
        </MainContainer>

}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
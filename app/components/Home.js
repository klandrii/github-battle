var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('../components/MainContainer');

function Home () {
  return (
    <MainContainer>
      <h1>Github Battle</h1>
      <p className='lead'>Let's do this!</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainContainer>
  )
}

module.exports = Home;
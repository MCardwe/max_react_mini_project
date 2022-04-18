import React from 'react';
import './App.css';
import Footer from './components/Footer';
import MainPage from './containers/MainPage';
import styled from 'styled-components';

function App() {

  const Title = styled.h1`
    padding: 3em;
    margin: 0;
    background-color: #679289;
    color: #F4C095;
    font-size: 5em;
    font-family: Bebas Neue, Sans-Seriff;
  `

  const Intro = styled.h3`
    margin: 0;
    padding: 1em;
    background-color: #1D7874;
    color: #F4C095;
  `

  return (
    <div className='App'>
      <Title>Max Cardwell's React Apps!</Title>
      <Intro>Hey! I am a Junior Software Developer who absolutely loves using react! I thought i'd put together a few little applications i've made so far for you to play with and enjoy!</Intro>
      <MainPage />
      <h3>Thanks for visiting!</h3>
      <div className='footer'>
      <Footer />
      
      </div>
    </div>
  );
}

export default App;

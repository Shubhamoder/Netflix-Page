import React from 'react';
import './App.css';
import Row from './Row';
import requests from "./requests";
import Banner from "./Banner";
import Nav from './Nav';
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="RomanticMovies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="MysteryMovies" fetchUrl={requests.fetchMystery}/>
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchSciFi}/>
      <Row title="Western Movies" fetchUrl={requests.fetchWestern}/>
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation}/>
      <Row title="Tv" fetchUrl={requests.fetchTV}/>
      
    <Footer/>
    </div>
  );
}

export default App;

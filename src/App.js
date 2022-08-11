import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Header from './components/Header';
import Home from './components/Home.js';
import Movie from './components/Movie.js';
import NotFound from './components/NotFound.js';


//Styles
import { GlobalStyle } from './GlobalStyle';

const  App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;

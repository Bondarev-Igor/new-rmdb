import React, { useState, useEffect } from 'react';
//API
import API from '../API';
//Config
import { POSTER_SIZE, IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
// Components

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return <div>Home Page</div>
}

export default Home;

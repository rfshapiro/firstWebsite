import React from 'react';
import logo from './logo.svg';
import './Home.css';
import HomeHeroSec from './HomeHeroSec';
import HomeEventSlider from './HomeEventSlider';
import HomeMissionSec from './HomeMissionSec';
import HomeTestimonial from './HomeTestimonial';
import HomeNetworkSlider from './HomeNetworkSlider';
import HomeDiscoverSec from './HomeDiscoverSec';

function Home() {
  return (
    <div className="Home">
      <HomeHeroSec></HomeHeroSec>
      <HomeEventSlider></HomeEventSlider>
      <HomeMissionSec></HomeMissionSec>
      <HomeTestimonial></HomeTestimonial>
      <HomeNetworkSlider></HomeNetworkSlider>
      <HomeDiscoverSec></HomeDiscoverSec>
    </div>
  );
}

export default Home;
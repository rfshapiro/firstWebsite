import React from 'react';
import logo from './logo.svg';
import './HomeHeroSec.css'
import { Container } from 'react-bootstrap';

function HomeHeroSec() {
  const videoLink = 'https://oorah.s3.us-west-2.amazonaws.com/video/OorahSlideshow.mp4'; // video link
  return (
    <div className="HomeHeroSec">
      <Container fluid>
        <div className="bg-video-wrap">

        <video className="embed-responsive-item" autoPlay loop muted>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          <div className="overlay"></div>
          <div className="intro-text">
            <h1>Welcome to My Website</h1>
            <p>Explore amazing content...</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeHeroSec;
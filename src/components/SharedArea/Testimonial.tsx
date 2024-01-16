import React from 'react';
import logo from './logo.svg';
import './Testimonial.css';
import { Card } from 'react-bootstrap';

interface TestimonialProps{
    text: string;
  }

function Testimonial(props: TestimonialProps): JSX.Element {
  return (
    <div className="Testimonial">
      <Card>
        <Card.Body>{props.text}</Card.Body>
      </Card>
    </div>
  );
}

export default Testimonial;
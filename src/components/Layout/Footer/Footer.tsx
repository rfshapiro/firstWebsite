import React from 'react';
import logo from './logo.svg';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <div className="Footer">
          <Container>
              <Row>
                  <Col xs={6} md={4}>
                      <ul>
                          <li>What We Do</li>
                          <li>About Us</li>
                          <li>Our Mission</li>
                          <li>Programs</li>
                          <li>Candlelighting Times</li>
                          <li>DirahCam</li>
                      </ul>
                  </Col>
                  <Col xs={6} md={4}>
                      <ul>
                          <li>What We Do</li>
                          <li>About Us</li>
                          <li>Our Mission</li>
                          <li>Programs</li>
                          <li>Candlelighting Times</li>
                          <li>DirahCam</li>
                      </ul>
                  </Col>
                  <Col xs={12} md={4}>
                      <ul>
                          <li>What We Do</li>
                          <li>About Us</li>
                          <li>Our Mission</li>
                          <li>Programs</li>
                          <li>Candlelighting Times</li>
                          <li>DirahCam</li>
                      </ul>
                  </Col>
              </Row>

              <Row>
                  <Col xs={12}>
                  © 2023 Oorah is a 501c3 organization | Oorah is sponsored in part by <a href="https://www.kars4kids.org/" target='blank'>Kars4Kids</a> | 
                    privacy policy | 
                    financials
                  </Col>
              </Row>
          </Container>
    </div>
  );
}

export default Footer;
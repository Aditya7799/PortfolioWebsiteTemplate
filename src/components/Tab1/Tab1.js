import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import logo from "../../Assets/home-main.svg"


function Tab1() {
    return (
      <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              Content goes here
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    );
}

export default Tab1;
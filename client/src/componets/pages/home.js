import React from "react";
import { Link,} from "react-router-dom";
import { Col, Row, Container, Jumbotron } from 'react-bootstrap';


function Home(){
    return(<Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                book by author
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
               book syno
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>)
}

export default Home;
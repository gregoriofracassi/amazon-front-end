import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class ListPage extends React.Component {
  state = {
    query: "",
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={1}>
            <img
              className="img-fluid"
              src="https://place-hold.it/100x100"
              alt=""
            />
          </Col>
          <Col xs={9}>
            <h6>UserX</h6>
            <b>Rating: 3/5</b>
            <p className="side-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              dolor in amet recusandae ex veritatis, culpa impedit labore
              delectus necessitatibus distinctio voluptatibus magni doloribus
              iusto quibusdam, maiores quis blanditiis iure?
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListPage

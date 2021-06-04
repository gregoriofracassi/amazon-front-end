import React from "react"
import ItemPage from "./Item"
import { Container, Row, Col } from "react-bootstrap"

class ListPage extends React.Component {
  state = {
    query: "",
  }

  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col xs={1}></Col>
          <Col xs={11}>
            <ItemPage></ItemPage>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListPage

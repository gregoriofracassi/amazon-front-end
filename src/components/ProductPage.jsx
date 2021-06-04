import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import CommentSection from "./CommentSection"

class ListItem extends React.Component {
  state = {
    query: "",
  }

  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col xs={10}>
            <Row>
              <Col xs={3}>
                <img
                  className="img-fluid"
                  src="https://images-na.ssl-images-amazon.com/images/I/81afsli5ctL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                  alt=""
                />
              </Col>
              <Col xs={7}>
                <h5>grpisrhgèsroih</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam veniam nemo magnam atque! Quidem eos excepturi
                  laboriosam quae et molestias repellat dolore magni voluptate
                  eaque ea, cupiditate blanditiis earum consectetur!
                </p>
                <h4>€ 299.99</h4>
              </Col>
            </Row>
            <div className="mt-5">
              <h5>Comments from other</h5>
              <CommentSection></CommentSection>
            </div>
          </Col>
          <Col xs={2}>
            <Card>
              <Card.Body>
                <Card.Title>€ 299.99</Card.Title>
                <Card.Text className="side-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <p>
                  Arrives: <b>Thursday, June 10</b>
                </p>
                <h6 className="text-success my-4 ">In stock</h6>
                <Button
                  variant="warning"
                  style={{ width: "8rem" }}
                  className="my-2"
                >
                  Add to Cart
                </Button>
                <Button variant="secondary" style={{ width: "8rem" }}>
                  Buy now
                </Button>
                <p className="mt-5 side-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias totam pariatur magnam a cupiditate nihil eaque fugiat
                  possimus optio distinctio et maiores, iusto, voluptates
                  assumenda deleniti atque? Officiis, autem voluptate.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListItem

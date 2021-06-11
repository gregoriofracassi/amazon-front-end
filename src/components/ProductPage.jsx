import React from "react"
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import CommentSection from "./CommentSection"
import CommentForm from "./CommentForm"

class ListItem extends React.Component {
  state = {
    product: {},
    review: { productId: parseInt(this.props.match.params.id), userId: 1 },
    change: false,
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://localhost:5000/api/products/${this.props.match.params.id}`
      )

      if (response.ok) {
        let data = await response.json()
        this.setState({ product: data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.change !== this.state.change) {
      try {
        let response = await fetch(
          `http://localhost:5000/api/products/${this.props.match.params.id}`
        )
        if (response.ok) {
          let data = await response.json()
          this.setState({ product: data })
          console.log(this.state.product.reviews)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  handleChange = (e) => {
    let id = e.target.id

    this.setState({ review: { ...this.state.review, [id]: e.target.value } })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      this.setState({ change: !this.state.change })
      const response = await fetch(`http://localhost:5000/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.review),
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  addToCart = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/api/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: this.props.match.params.id,
          userId: 1,
        }),
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        this.props.history.push(`/cart/1`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col xs={10}>
            <Row>
              <Col xs={5}>
                <img
                  className="img-fluid"
                  src={this.state.product.imageUrl}
                  alt=""
                />
              </Col>
              <Col xs={7}>
                <h5>{this.state.product.name}</h5>
                <p className="side-text no-mb">
                  From: <b>{this.state.product.brand}</b>
                </p>
                <p className="side-text">
                  Category:{" "}
                  <span className="font-italic">
                    {this.state.product.category}
                  </span>
                </p>
                <p>{this.state.product.description}</p>
                <h4>€ {this.state.product.price}</h4>
                <Button
                  type="button"
                  variant="outline-secondary"
                  size="sm"
                  className="mt-4 pointer"
                  onClick={() =>
                    this.props.history.push(
                      `/editProduct/${this.state.product.id}`
                    )
                  }
                >
                  Edit Item
                </Button>
              </Col>
            </Row>
            <div className="mt-5">
              {/* <CommentForm
                productId={this.props.match.params.id}
                handleChange={this.handleChange}
              /> */}
              <Container>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      id="rate"
                      as="select"
                      value={this.state.review.rate}
                      onChange={this.handleChange}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      id="review"
                      value={this.state.review.review}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button variant="warning" className="mt-3" type="submit">
                    Add review
                  </Button>
                </Form>
              </Container>
              {/* end commentForm */}
              <h5 className="my-5">Comments from other users</h5>
              {/* <CommentSection comments={this.state.product.reviews} /> */}
              <Container>
                {this.state.product.reviews &&
                  this.state.product.reviews.map((c) => {
                    return (
                      <Row key={c._id}>
                        <Col xs={1}>
                          <img
                            className="img-fluid"
                            src="https://place-hold.it/100x100"
                            alt=""
                          />
                        </Col>
                        <Col xs={9}>
                          <h6>
                            {c.user.name} {c.user.surname}
                          </h6>
                          <b>{c.rate}/5</b>
                          <p className="side-text">{c.review}</p>
                        </Col>
                      </Row>
                    )
                  })}
              </Container>
              {/* end comment section */}
            </div>
          </Col>
          <Col xs={2}>
            <Card>
              <Card.Body>
                <Card.Title>€ {this.state.product.price}</Card.Title>
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
                  style={{ width: "100%" }}
                  className="my-2"
                  onClick={this.addToCart}
                >
                  Add to Cart
                </Button>
                <Button variant="secondary" style={{ width: "100%" }}>
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

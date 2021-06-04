import React from "react"
import { Form, Container, Row, Col, Button } from "react-bootstrap"

class ProductForm extends React.Component {
  state = {}

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rating</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="warning" className="mt-3" type="submit">
            Add review
          </Button>
        </Form>
      </Container>
    )
  }
}

export default ProductForm

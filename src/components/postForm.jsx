import React from "react"
import { Form, Container, Row, Col, Button } from "react-bootstrap"
import "../PostForm.css"

class PostForm extends React.Component {
  state = {}

  render() {
    return (
      <Container className="pad-top">
        <Row>
          <Col xs={{ offset: 3, span: 6 }}>
            <Form>
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  placeholder="insert your product's name..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Description</Form.Label>
                <Form.Control as="textarea" id="description" rows={3} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Brand</Form.Label>
                <Form.Control
                  type="text"
                  id="brand"
                  placeholder="insert your product's brand..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  id="imageUrl"
                  placeholder="insert your image's url..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  id="price"
                  placeholder="insert your price in €..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  id="category"
                  placeholder="insert your product's category..."
                />
              </Form.Group>
              <hr />
              <Button variant="warning" type="submit">
                Add Product
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PostForm

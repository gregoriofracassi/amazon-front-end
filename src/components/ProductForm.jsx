import React from "react"
import { Form, Container, Row, Col, Button } from "react-bootstrap"
import "../PostForm.css"

class ProductForm extends React.Component {
  state = {
    product: {},
  }

  onSubmit = async (action) => {
    e.preventDefault()

    const endpoint = action === 'POST' 
    ? `http://localhost:3001/products` : `http://localhost:3001/products/${this.props.match.params.id}`

    try {
      const response = await fetch(, {
        method: action,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.product),
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    const id = e.target.id
    id === "price"
      ? this.setState({
          product: { ...this.state.product, [id]: parseInt(e.target.value) },
        })
      : this.setState({
          product: { ...this.state.product, [id]: e.target.value },
        })
  }

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
                  value={this.state.product.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as="textarea"
                  id="description"
                  rows={3}
                  value={this.state.product.description}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Brand</Form.Label>
                <Form.Control
                  type="text"
                  id="brand"
                  placeholder="insert your product's brand..."
                  value={this.state.product.brand}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  id="imageUrl"
                  placeholder="insert your image's url..."
                  value={this.state.product.imageUrl}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  id="price"
                  placeholder="insert your price in €..."
                  value={this.state.product.price}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  id="category"
                  placeholder="insert your product's category..."
                  value={this.state.product.category}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <hr />
              {this.props.formType === "add" && (
                <Button variant="warning" type="submit">
                  Add Product
                </Button>
              )}
              {this.props.formType === "edit" && (
                <div className="d-flex justify-content-between">
                  <Button variant="warning" type="submit">
                    Edit Product
                  </Button>
                  <Button variant="secondary" type="submit">
                    Delete Product
                  </Button>
                </div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProductForm

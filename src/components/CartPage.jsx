import React from "react"
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap"

class ListPage extends React.Component {
  state = {
    user: {},
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/1`)
      if (response.ok) {
        const data = await response.json()
        this.setState({ user: data })
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Container className="mt-5">
        <Card body>
          <h5>
            {this.state.user.name} {this.state.user.surname}'s Shopping Cart
          </h5>
          <ListGroup>
            {this.state.user.carts &&
              this.state.user.carts.map((c) => {
                return (
                  <ListGroup.Item className="d-flex justify-content-between">
                    <div>
                      {c.product.name} - {c.product.brand}
                    </div>{" "}
                    <div>€ {c.product.price}</div>
                  </ListGroup.Item>
                )
              })}
            {/* {this.state.user.carts && this.state.user.carts.forEach} */}
            <Button variant="warning" className="ml-auto mt-3">
              Checkout
            </Button>
          </ListGroup>
        </Card>
      </Container>
    )
  }
}

export default ListPage

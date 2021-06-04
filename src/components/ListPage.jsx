import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class ListPage extends React.Component {
  state = {
    products: [],
  }

  componentDidMount = async () => {
    try {
      let response = await fetch("http://localhost:3001/products")

      if (response.ok) {
        let data = await response.json()
        console.log(data)
        this.setState({ products: data })
        console.log(this.state.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col xs={2}></Col>
          <Col xs={10}>
            {this.state.products.map((p) => {
              return (
                <Container
                  key={p._id}
                  className="pointer"
                  onClick={() => this.props.history.push(`/product/${p._id}`)}
                >
                  <Row>
                    <Col xs={2}>
                      <img className="img-fluid" src={p.imageUrl} alt="" />
                    </Col>
                    <Col xs={10}>
                      <h5>{p.name}</h5>
                      <p>{p.description}</p>
                      <h4>{p.price}</h4>
                    </Col>
                    <hr className="my-3"></hr>
                  </Row>
                </Container>
              )
            })}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListPage

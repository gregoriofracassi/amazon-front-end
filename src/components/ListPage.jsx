import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class ListPage extends React.Component {
  state = {
    products: [],
  }

  componentDidMount = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/products/")

      if (response.ok) {
        let data = await response.json()
        this.setState({ products: data })
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
                  className="pointer my-2"
                  onClick={() => this.props.history.push(`/product/${p.id}`)}
                >
                  <Row>
                    <Col xs={2}>
                      <img className="img-fluid" src={p.imageUrl} alt="" />
                    </Col>
                    <Col xs={10}>
                      <h5>{p.name}</h5>
                      <p>{p.description}</p>
                      <h4>€ {p.price}</h4>
                    </Col>
                  </Row>
                  <hr></hr>
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

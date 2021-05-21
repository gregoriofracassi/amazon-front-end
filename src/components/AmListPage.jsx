import { Component } from "react";
// import { Link } from "react-router-dom";
import "./AmListPageStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

class AmazonListPage extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    try {
      let myFetch = await fetch("https://striveschool-api.herokuapp.com/books");
      let myFetchJson = await myFetch.json();
      this.setState = { products: myFetchJson };
      console.log(myFetchJson);
    } catch (error) {
      alert("An error occured :( ");
    }
  };

  render() {
    return (
      <main>
        <h2 style={{ textAlign: "Center" }}>Amazon</h2>
        <br />
        <Container>
          <Row>
            {this.state.products.map((p) => {
              return (
                <Col key={p.asin} xs={3}>
                  <Card>
                    <Card.Img variant="top" alt={p.title} src={p.img} />
                    <Card.Body>
                      <Card.Title>{p.title}</Card.Title>
                      <Card.Text>{p.price}</Card.Text>
                      <Button variant="primary">buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    );
  }
}

export default AmazonListPage;

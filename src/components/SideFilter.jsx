import { FormGroup } from "@material-ui/core";
import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class SideFilter extends Component {
  state = {
    brand: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  filterSubmit = (e) => {
    e.preventDefault();
    //?brand=fdfsdf&category=books&price<3&price>10
    this.props.history.push(
      this.props.match.path +
        ` ?brand=${this.state.brand}&category=${this.state.category}&price<${this.state.maxPrice}&price>${this.state.minPrice}`
    );
  };
  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.filterSubmit(e)}>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              id="category"
              value={this.state.category}
              onChange={(e) => this.handleChange(e)}
            >
              <option></option>
              <option>mobile</option>
              <option>book</option>
              <option>tablet</option>
              <option>cloth</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              id="brand"
              value={this.state.brand}
              onChange={(e) => this.handleChange(e)}
            >
              <option></option>
              <option>iphone</option>
              <option>samsung</option>
              <option>nokia</option>
              <option>sony</option>
            </Form.Control>
          </Form.Group>

          <Form.Label>Price:</Form.Label>
          <div className="price-container">
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              id="priceRange1"
            >
              <Form.Control
                type="text"
                placeholder="from"
                size="sm"
                id="minPrice"
                value={this.state.minPrice}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              id="priceRange2"
            >
              <Form.Control
                type="text"
                placeholder="to"
                size="sm"
                id="maxPrice"
                value={this.state.maxPrice}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
          </div>

          <Button variant="primary" type="submit" className="filter-Button">
            Filter
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(SideFilter);

import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class CommentSection extends React.Component {
  state = {}

  render() {
    return (
      <Container>
        {this.props.comments &&
          this.props.comments.map((c) => {
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
    )
  }
}

export default CommentSection

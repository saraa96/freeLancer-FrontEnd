import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Form ,Button} from "react-bootstrap";
export default class ShowPost extends Component {
  state = {
    data: "",
    loading: false,
    id: this.props.match.params.id,
    comment: "",
    comments:[],
  };
  loadData = () => {
    return axios
      .get(`http://localhost:5001/posts/` + this.props.match.params.id)
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data,
        comments: result.data.comments,
          loading: false
        });
      })
      .catch(error => {
        console.error("error: ", error);
      });
  };
  componentDidMount() {
    this.loadData();
  }



  ChangeComment = event => {
    this.setState({ comment: event.target.value});

  };

    pushComment = comment => {
 
      let com = this.state.comments
      com.push(this.state.comment);
      this.setState({ comments: com });

  };
  render() {
              console.log(this.state.comment)

//     console.log(this.state.comment);
 console.log(this.state.comments);
    return (
      <div>
        {/* <Container > */}
        <Card
          border="light"
          style={{
            marginLeft: "15%",
            width: "70rem",
            marginTop: "100px",
            height: "30rem",
            borderBottom: "none"
          }}
        >
          <Card.Header>
            <img
              class="ui avatar image"
              src="https://capenetworks.com/static/images/testimonials/user-icon.svg"
            />{" "}
            {this.state.data.User_name + " "} question :{" "}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h3>{this.state.data.title}</h3>
            </Card.Title>
            <small className="text-muted">
              <p
                style={{
                  backgroundColor: "#e2e2e2",
                  color: "black",
                  width: "80px"
                }}
              >
                {this.state.data.tags + " "}
              </p>
            </small>
            <Card.Text>
              <br />
              <h5>{this.state.data.description}</h5>
            </Card.Text>
          </Card.Body>
          <Form style={{marginTop:"200px"}}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <h2>Your Answer</h2>
              </Form.Label>
              <Form.Control
                value={this.state.comment}
                onChange={this.ChangeComment}
                as="textarea"
                rows="6"
              />
              <Button onClick={this.pushComment} > submit</Button>
            </Form.Group>
          </Form>
        </Card>
        {/* </Container> */}
      </div>
    );
  }
}

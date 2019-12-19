import React, { Component } from "react";
import axios from "axios";
 import store from '../store'
 import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Container, Form ,Button} from "react-bootstrap";
class ShowPost extends Component {
  state = {
    data: "",
    loading: true,
    id: this.props.match.params.id,
    comment: "",
      comments:""
  };
  loadData = () => {
    return axios
      .get(`http://localhost:5001/posts/` + this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data,
          loading: true
        });
      })
      .catch(error => {
        console.error("error: ", error);
      });
  };


  ChangeComment = event => {
    this.setState({ comment: event.target.value})
  };

onSubmit=(e)=>{
        e.preventDefault();
        const comment = {
             answer: this.state.comment,
      User_id: this.props.auth.user.id,
         Post_id: this.props.match.params.id
        }
        axios.post('http://localhost:5001/comment/add',comment)
        .then(res => console.log(res.data)
        ) 
        console.log(comment)
this.redirect()
    }
    redirect=()=>{
      window.location = '/post/:id'
    }

  loadComment = () => {
    return axios
      .get(`http://localhost:5001/comment/all`)
      .then(result => {
        console.log(result);
        this.setState({
          comments: result.data,
      loading: false,
        });
         console.log(this.state.comments);
      })
           .catch(error => {
        console.error("error: ", error);
      });
  };

   componentDidMount(){
this.loadData()
this.loadComment()
   }
    render() {
      let Ans
if (this.state.loading === false) {  Ans = this.state.comments.map(item => 
 <div className="ans">
   <div  style={{width:"700px",marginTop:"100px",marginBottom:"60px"}} class="ui card">
  <div  class="content">

    <div class="meta">
     
      <br/>
      
    </div>
    <div style={{float:"left"}} class="description">
      <p >
       {item.answer}
      </p> 
    
    </div> 
  </div>
  <div class="extra content">
  
    <div class="right floated author">
      <img class="ui avatar image" src="https://capenetworks.com/static/images/testimonials/user-icon.svg"/> sara
    </div>
       <i class="right floated like icon"></i>
    <i class="right floated star icon"></i>
  </div>

</div>

</div>

  ) 
}
    return (
      <div>

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
              <Button onClick={this.onSubmit }> submit</Button>
            </Form.Group>
          </Form>
        </Card>
        {Ans}
  </div>
    );
  }
}
ShowPost.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(ShowPost);

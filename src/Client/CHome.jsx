import React, { Component } from 'react'
import FTable from '../freelancer/FTable'
import {Card, Accordion, Button } from 'react-bootstrap'
import {Link } from "react-router-dom";
import store from '../../src/store'
import axios from 'axios'
import Checkout from '../checkout/Checkout'
export default class RightSide extends Component {
  state={
    data: [],
    passobj: [],
    flag: 'false'
  }
  componentDidMount = () =>{
    axios.get('http://localhost:5001/projects/all')
    .then(response => {
        console.log("here sta");
        console.log(response.data);
        this.setState({data: response.data})
        console.log("here end");
        console.log(this.state.data);
    }) 
    .catch((err) => {
        console.log(err);
    })
}
exerciseList() {
  console.log("hehewkf");
  console.log(this.state.data);
  console.log("arrat");
  console.log(this.state.passobj);
  const st = store.getState()
  return this.state.data.map(project => {
    if(project.client_id === st.auth.user.id){
       this.state.data.map(project => {
      console.log(project.title);
    return          <Card  style={{backgroundColor: 'antiquewhite', padding: '15rm', height: '18rm', width: '20rm' }}>
            <Card.Body>
            <div className="thr"><Card.Title >{project.title}</Card.Title>
            <Card.Img variant="top" src={project} />
  <Card.Subtitle className="mb-2 text-muted">tags:{
    project.tags.map( tag => {return <p>{tag}</p>})
  }</Card.Subtitle></div>  
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
            </Card.Body>
          </Card> 
    // <tbody>
    //     <td>{project.title}</td> 
    //     <td>{project.description}</td>;
    // </tbody>
  })
}
})
}


wait () {
  // if (){
  // }else{
  // }
  const st = store.getState()
  return this.state.data.map(project => {
    if(project.client_id === st.auth.user.id){
      console.log("hgfkh heer ");
      console.log(project.client_id);
      return <Card>
      <Card.Header as={Button} variant="success">
        <Accordion.Toggle style={{width: '100%' , border:'none' ,backgroundColor:'Transparent'}}v ariant="link" eventKey="0">
        <h1>{project.client_name}</h1>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
    <Card.Body>{project.freelancer_ids.map( tag => {return <div>Freelancer: <br/>
      <Link to ={`/freelancer/${tag}`}> see profile </Link>
      {/* <Checkout
             name={st.auth.user.name}
             description={'Only the Book'}
             amount={11111}
            /> */}
      <button > accept this freelance</button>
      <br/>
      <br/>
    </div>} )}
      </Card.Body>
    </Accordion.Collapse>
    </Card>
    }
  })
}
    render() {
      const st = store.getState()
      console.log(st);
        return (
            <div>
<div className="row py-5 px-4">
        <div className="bg-white shadow rounded overflow-hidden">
        <br/>
            <div className="px-4 pt-0 pb-4 bg-dark">
                <div className="media align-items-end profile-header">
                    <div className="profile mr-3"><br/><img src="https://elysator.com/wp-content/uploads/blank-profile-picture-973460_1280-e1523978675847.png" alt="..." width="130" class="rounded mb-2 img-thumbnail"/>
                    <a href="#" className="btn btn-dark btn-sm btn-block">Edit profile</a></div>
                    <div className="media-body mb-5 text-white">
        <h4 className="mt-0 mb-0">{st.auth.user.name}</h4>
                        <p className="small mb-4"> <i class="fa fa-map-marker mr-2"></i>Makkah</p>
                    </div>
                </div>
<br/>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 >241</h5> <i class="fa fa-file mr-1"/>Project
                    </li>
                    <li class="list-inline-item">
                        <h5 >Rating</h5> <i class="fa fa-star mr-1"/>
                        <i class="fa fa-star mr-1"/>
                        <i class="fa fa-star-half-o mr-1"/>
                        <i class="fa fa-star-o mr-1"/>
                        <i class="fa fa-star-o mr-1" />
                    </li>
                </ul>
            </div>
            </div>
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0"> Recent Projects </h5><a href="#" class="btn btn-link text-muted">Show all</a>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, margin:"auto"}}>
                {this.exerciseList()}
                <Card  style={{backgroundColor: 'white', color:'white', padding: '15rm', height: '18rm', width: '20rm' }}>
            <Card.Body>
            <div className="thr"><Card.Title ></Card.Title>
            <Card.Img variant="top" />
  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle></div>  
  <Card.Text  style={{color:'white'}} >
    No Project to display ==================================  
  </Card.Text>
            </Card.Body>
          </Card> 
          <br/>
                <br/>
                <hr/>
                </div>
                <h1>Waiting Projects List</h1>
<br/>
<Accordion>
  <Card>
  {this.wait()}
  </Card>
</Accordion>
            </div>
        </div>
</div>
            </div>
        )
    }
}
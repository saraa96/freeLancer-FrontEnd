
import React, { Component } from 'react'
import './q.css'
import {Container,Card,Row,Col,Image,Button,Dropdown,ButtonToolbar,SplitButton} from 'react-bootstrap'
import AddQ from './addq'
import axios from 'axios'
import Show from './ShowPost'
import {
  BrowserRouter ,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";
export default class qPage extends Component {
state={
  data:'',
  loading: true
}
  loadData = () => {
    return axios
      .get(`http://localhost:5001/Posts/all`)
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data,
      loading: false,
        });
      })
           .catch(error => {
        console.error("error: ", error);
      });
  };

   componentDidMount(){
this.loadData()

   }
    render() {
      let Questions
if (this.state.loading === false) {  Questions = this.state.data.map(item => 
 <div >
   <div  style={{width:"1000px",marginTop:"-50px",marginLeft:"-300px",marginBottom:"60px"}} class="ui card">
  <div  class="content">
    <div style={{float:"left"}} class="header">{item.title}</div>
    
    <div class="meta">
      <span class="right floated time">{item.date.substring(0,10)}</span>
      <br/>
      <span style={{float:"left",color:"black"}} class="category"> {"  "+item.tags + "  "} </span>
    </div>
    <div style={{float:"left"}} class="description">
      <p >
         {item.description.substring(0,110) + "..."}
           <span ><NavLink  style={{color:"blue",border:"none"}} to={`/post/${item._id}`}>more</NavLink></span>
      </p> 
    
    </div> 
  </div>
  <div class="extra content">
  
    <div class="right floated author">
      <img class="ui avatar image" src="https://capenetworks.com/static/images/testimonials/user-icon.svg"/> {item.User_name}
    </div>
       <i class="right floated like icon"></i>
    <i class="right floated star icon"></i>
  </div>

</div>

</div>

  ) 
}
        return (
            <div className="Qpage">
     
      <Row>
    
           <div style={{borderBottom:"0.4px solid black", width:"100%"}}> 
             <h1  style={{float:"left" , paddingTop:"80px"}}>
       All Questions
      </h1>
            <Image style={{float:"right" , width:"190px" , }} src='https://risemutual.org/wp-content/uploads/2018/02/solving-problems-icon.png' />
            <br/>
       </div>
        <Col cclass="col-3" >

        <AddQ/> 
        </Col>  
            </Row>
            
<Row> 
        
     <Col class="col-3" >

<Card style={{ width: '18rem',marginTop:"-80px",height:"400px" , position:"fixed"}} className="text-center">
  <Card.Header>Filter</Card.Header>
  <Card.Body>
    <Card.Title>Select langouge </Card.Title>
    <Card.Text>
    <div>
  <input type="radio" id="css" name="drone" value="css"
         />
  <label for="css" style={{marginLeft:"4px"}}> Css</label>
  </div>
   <div>
  <input type="radio" id="html" name="drone" value="html"
         />
  <label for="html" style={{marginLeft:"4px"}}> Html</label>
</div>
   <div>
  <input type="radio" id="javascript" name="drone" value="javascript"
         />
  <label for="javascript" style={{marginLeft:"4px"}}> java</label>
</div>
   <div>
  <input type="radio" id="C++" name="drone" value="C++"
         />
  <label for="C++" style={{marginLeft:"4px"}}> C++</label>
</div>
    </Card.Text>
    <Card.Title> _______  </Card.Title>
    <Card.Text>
       <div>

{console.log(this.state.data)}
   <ButtonToolbar>
    {
      <SplitButton
        drop={`right`}
        variant="light"
        title={`arrang by`}
        id={`dropdown-button-drop-${`right`}`}
        key='right'
      >
        <Dropdown.Item eventKey="1">popular</Dropdown.Item>
        <Dropdown.Item eventKey="2">newest</Dropdown.Item>
      </SplitButton>
    }
  </ButtonToolbar>
</div>
    
    
     </Card.Text>
    <Button variant="light">Search</Button>
  </Card.Body>
  <Card.Footer className="text-muted">© 2019</Card.Footer>
</Card>
     </Col> 
 <Col class="col-6" > 

{Questions}
</Col> 

</Row>



 
    <BrowserRouter>
      <Switch>
 <Route path="/post/:id"  render={({match}) => {
            return  <Show 
            post={this.state.data.find(post => post._id === match.params.id) }  />}  } component ={Show} />
               </Switch>
    </BrowserRouter> 
</div> 
            
        )
    }
}

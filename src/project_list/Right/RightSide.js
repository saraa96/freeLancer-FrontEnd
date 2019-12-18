import React, { Component } from 'react'
import {Image, Navbar, Nav,Container,Col,Button} from 'react-bootstrap'
import axios from 'axios'

export default class RightSide extends Component {
    
    applyhundler = () => {
       const url = `${this.props.details._id}`+`/newsfreelancer`
        axios({
            method: 'POST',
            url: url
          }).then(response => {
            console.log('Hi')
            console.log(response) // take a look at what you get back!
            console.log('Hi')
            this.setState({ current: response.data})
          })
    }


    render() {

        console.log("ptp");
        console.log(this.props);
        
        
        let d = this.props.details.price > 0 ?

        
        <div className="right-detail">
                
            
            <figure className="film-backdrop">
                    
                    <h1>{this.props.details.title}</h1>
                    <h2>{this.props.details.description}</h2>
                    <img src={this.props.details.pic} /><br/>
                    <br/>
                    <br/>
                    <center><Button > Apply ...</Button></center>
            </figure>
                          
        </div>          
        
: <div className="right-detail">
                
                    No Project selected
                
            </div>

        return (
            <div className="champs-detail">
                <div className="right-details">
            <h1 className="section-title">DETAILS</h1>
        </div>
                {d}
            </div>
            
        )
    }
}


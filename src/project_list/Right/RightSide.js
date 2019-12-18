import React, { Component } from 'react'
import {Image, Navbar, Nav,Container,Col,Button} from 'react-bootstrap'
import axios from 'axios'
import store from '../.././store'
export default class RightSide extends Component {
    applyhundler = () => {
        const st = store.getState()
        console.log(st.auth.user.id);
       const url = `http://localhost:5001/projects/${this.props.details._id}/addfreelancer/${st.auth.user.id}`
       //${this.props.details._id}/addfreelancer/${st.auth.user.id}
        axios({
            method: 'POST',
            url: url
          }).then(response => {
            console.log(response);
          })
    }
    render() {
        const st = store.getState()
        console.log(st);
        console.log(st.auth.user.id);
        // console.log("ptp");
        // console.log(this.props);
        let d = this.props.details.price > 0 ?
        <div className="right-detail">
            <figure className="film-backdrop">
                    <h1>{this.props.details.title}</h1>
                    <h2>{this.props.details.description}</h2>
                    <img src={this.props.details.pic} /><br/>
                    <br/>
                    <br/>
                    <center><Button onClick={this.applyhundler}> Apply ...</Button></center>
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



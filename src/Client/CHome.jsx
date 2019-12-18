import React, { Component } from 'react'
import FTable from '../freelancer/FTable'
import {Card } from 'react-bootstrap'
export default class CHome extends Component {
    render() {
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
                        <h4 className="mt-0 mb-0">Israa Shuri</h4>
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
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant= "top" src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>

  </Card.Body>
</Card>
                </div>
                
                <FTable/>
            </div>
        </div>
</div>
            </div>
        )
    }
}

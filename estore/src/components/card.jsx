import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function  Cards(props) {


  return (

   <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {props.data.image} />
        <Card.Body>
          <Card.Title> {props.data.title} </Card.Title>
          <Card.Text> {props.data.price}  </Card.Text>
          <Card.Text> {props.data.description}  </Card.Text>
          <Button variant="primary">Buy</Button>
          <Button variant="danger">Add to Cart</Button>
        </Card.Body>
      </Card>
   </>
  )
}

export default  Cards

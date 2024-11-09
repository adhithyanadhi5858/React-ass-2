

import { Card, Col, Container, Row } from "react-bootstrap";
import Cards from "./components/card";
import Navs from "./components/header";


function App() {

  const products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
     "id": 2,
      "title": " Laptops",
      "price": 250.95,
      "description": "These laptops are designed with the latest Intel Core processors and Intel Iris X graphics. They also feature Intel Threat Detection Technology (Intel TDT) for security and Intel Unison to sync photos, files, and texts.",
      "category": "Electronics",
      "image": "https://m.media-amazon.com/images/I/71B3iWqpuLL.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 3,
      "title": "Mouse",
      "price": 90.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "Electronics",
      "image": "https://m.media-amazon.com/images/I/61MZWFMy9TL._AC_UL320_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 4,
      "title": "Keyboard",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "Electronisc",
      "image": "https://m.media-amazon.com/images/I/61OlqodcpkL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 5,
      "title": "Apple Iphone 13",
      "price": 650.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 6,
      "title": "Smart Watch",
      "price": 100.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://m.media-amazon.com/images/I/41yCQTkMJ-L._SX300_SY300_QL70_FMwebp_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 7,
      "title": "Earbuds",
      "price": 50.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://m.media-amazon.com/images/I/71CZkHTJKfL._SY450_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 8,
      "title": "Apple Ipad",
      "price": 500.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://m.media-amazon.com/images/I/61goypdjAYL._SX679_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }
    , {
      "id": 9,
      "title": "Speaker",
      "price": 45.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://m.media-amazon.com/images/I/41jWRTkZgwL._SX300_SY300_QL70_FMwebp_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 10,
      "title": "Camara",
      "price": 1000.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://m.media-amazon.com/images/I/41yLzmYC7eL._SY300_SX300_QL70_FMwebp_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }
  ]


  return (
   <>

   <Navs/>
   <Container>
      
      <Row>
        {products.map((product, index) => {
          return(
            <Col xs={12}   sm={6} md={4} lg={3} xxl={2} >                       
                <Cards data={product} />        
            </Col>
          )
        })}
      </Row>

   </Container>
   

     
   </>
  );
}

export default App;

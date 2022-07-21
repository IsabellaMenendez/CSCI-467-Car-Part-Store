import '../styles.css';
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Form, Nav, Navbar, Container } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";

function Products() {

  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  //fill products with response 
  Axios.get("http://localhost:3001/products").then((response) => {
    setProducts(response.data); 
  });
 
  return (
    <div className="Products">
      <Navbar bg="dark" variant="dark" expand="lg" className="navigation-bar"> 
          <Navbar.Brand>
            <img
              alt=""
              src="./car.png"
              width="30"
              height="30"
              className="d-inline-block align-top nav-logo"
            />{' '}
            Car Part Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"> 
                <Nav.Link className="nav-tiem" href="/">Product Catalog</Nav.Link>
                <Nav.Link className="nav-tiem" href="/cart">Shopping Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar> 
      <div className="header">
        <h2>Product Catalog</h2>
      </div>

      <div className="middle-div">
      <Container>
        <div className="search-bar">
          <Form.Control placeholder="Search Products..." type="text" style={{maxWidth: "20%"}}
              onChange={(event) => {setSearchProduct(event.target.value);
              }} 
          />
        </div>
        <div className="product-grid">
          {products.filter((val) => {
            if (searchProduct === "") {
              return val;
            } else if (val.description.toLowerCase().includes(searchProduct.toLowerCase())) {
                return val;
            }
          }).map((val,key) => {
            
           products.forEach((val,key) => {
            var firstLetter = val.description.slice(0,1); //take first letter
            firstLetter = firstLetter.toUpperCase(); //cipitalize first letter
            var restOfDesc = val.description.slice(1,val.description.length); //take rest of description
            val.description = firstLetter + restOfDesc; //concatonate capitilized first letter with the rest of the description
           }); 
           //returns a grid of product cards
            return (
              <Col className="product-col"> 
                <Card className="product-card d-flex mb-2"> 
                    <Card.Header className="card-header-border">
                      <Card.Img className="product-img" variant ="top" src={val.pictureURL} alt="product-img"/>
                    </Card.Header>
                  <Card.Body className="product-body"> 
                    <Card.Title>{val.description}</Card.Title>
                    <Card.Text>${val.price}</Card.Text>
                    <Card.Text>{val.weight}lbs</Card.Text>
                      <Form.Control variant="dark" placeholder="Qty" type="number" id="quantity" min="1" max="100" />
                    <Button className="qty" variant="outline-dark" size="sm">Add To Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </div>
        </Container>
      </div>
      
      <div className="footer">
        
      </div>

    </div> 
  );
}

export default Products;
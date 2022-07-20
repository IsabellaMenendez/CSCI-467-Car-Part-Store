import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'


function Cart() {

  return (
    <div className="Cart">
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
        <h2>Shopping Cart</h2>
      </div>

    </div> 
  );
}

export default Cart;
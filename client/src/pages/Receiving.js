import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'


function Receiving() {

  return (
    <div className="Receiving">
      <Navbar bg="dark" variant="dark" expand="lg" className="navigation-bar"> 
          <Navbar.Brand>
            <img
              alt=""
              src="./warehouse.png"
              width="30"
              height="30"
              className="d-inline-block align-top nav-logo"
            />{' '}
            Car Parts Warehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"> 
                <Nav.Link className="nav-tiem" href="/fulfillment">Order Fufillment</Nav.Link>
                <Nav.Link className="nav-tiem" href="/receiving">Receiving</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar> 
      <div className="header">
        <h2>Receiving</h2>
      </div>

    </div> 
  );
}

export default Receiving;
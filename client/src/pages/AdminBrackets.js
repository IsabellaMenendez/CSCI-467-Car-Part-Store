import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'


function AdminBrackets() {

  return (
    <div className="AdminBrackets">
      <Navbar bg="dark" variant="dark" expand="lg" className="navigation-bar"> 
          <Navbar.Brand>
            <img
              alt=""
              src="./admin.png"
              width="30"
              height="30"
              className="d-inline-block align-top nav-logo"
            />{' '}
            Car Parts Administration
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"> 
                <Nav.Link className="nav-tiem" href="/admin-orders">Orders</Nav.Link>
                <Nav.Link className="nav-tiem" href="/admin-brackets">Weight Brackets</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar> 
      <div className="header">
        <h2>Orders</h2>
      </div>

    </div> 
  );
}

export default AdminBrackets;
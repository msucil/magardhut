import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"


function MainNavbar() {
  return (
    <>
      {<Navbar expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand href="/" style={{ textShadow: '0px 0px 1px BLACK' }}>मगर ढूट</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            // navbarScroll
            >
              <Nav.Link href="/learn/vocabularies" >
                शब्दावलीहरू
              </Nav.Link>
              <Nav.Link href="/learn/grammer" >
                व्याकरण
              </Nav.Link>
              <Nav.Link href="/learn/words" >
                शब्द निर्माण
              </Nav.Link>
              <Nav.Link href="/learn/conversations" >
                कुराकानी
              </Nav.Link>
              <Nav.Link href='/learn/akkha-lipi'>
              अख्खा लिपी
              </Nav.Link>
              <Nav.Link href="/dictionary" >
                शब्दकोष
              </Nav.Link>
              <Nav.Link href="/literatures" >
                साहित्य
              </Nav.Link>
              <Nav.Link href="/about" >
                हाम्रो बारेमा
              </Nav.Link>
            </Nav>
            <Nav className='d-flex'>
              <Nav.Link href="https://www.facebook.com/magar.dhuut" target='_blank' >
                <i className="bi bi-facebook"></i>
              </Nav.Link>

              <Nav.Link href="https://www.tiktok.com/@magardhut" target='_blank' >
                <i className="bi bi-tiktok"></i>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      }
    </>
  );
}

export default MainNavbar;
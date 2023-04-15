import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"


function MainNavbar() {
  return (
    <>
      {<Navbar  expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand href="/" style={{ textShadow: '0px 0px 1px BLACK'}}>मगर ढूट</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              <NavDropdown title="शब्दावलीहरू" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/learn">Parts of Body/Sarirka Angaharu ko naam</NavDropdown.Item>
                <NavDropdown.Item href="/learn">Diseases/rogharu</NavDropdown.Item>
                <NavDropdown.Item href="/learn">Kinship/Shaino</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="सामान्य व्याकरण" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/learn">Dhut</NavDropdown.Item>
                <NavDropdown.Item href="/learn">Sabdhakosh</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="मगर भाषामा शब्द निर्माण" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/learn">Dhut</NavDropdown.Item>
                <NavDropdown.Item href="/learn">Sabdhakosh</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="कुराकानी" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/learn">Dhut</NavDropdown.Item>
                <NavDropdown.Item href="/learn">Sabdhakosh</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/dictionary" >
                शब्दकोष
              </Nav.Link>
              <Nav.Link href="/literatures" >
                साहित्य
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
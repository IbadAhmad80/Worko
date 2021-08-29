import { Navbar, Nav, Container, Button } from "react-bootstrap";

function AppNavBar() {
  return (
    <div>
      <div id="preloader"></div>
      <style type="text/css">
        {`
              .navbar {
               font-family:"Open Sans", sans-serif
               
                   }
        `}
      </style>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="bg-dark px-4 px-sm-0"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-2 text-capitalize fw-bolder">
            WORKO.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto text-center">
              <Nav.Link
                className="px-2 fs-6  fw-medium text-decoration-none text-white nav-links"
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="px-3 fs-6  fw-medium text-decoration-none text-white nav-links"
                href="#about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="px-3 fs-6  fw-medium text-decoration-none text-white nav-links"
                href="#services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="px-3 fs-6  fw-medium text-decoration-none text-white nav-links"
                href="#portfolio"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                className="px-3 fs-6  fw-medium text-decoration-none text-white nav-links"
                href="#team"
              >
                Team
              </Nav.Link>
              <Nav.Link
                className="px-3 fs-6  fw-medium text-decoration-none text-white nav-links"
                href="#contact"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <a href="#about">
                <Button
                  variant="outline-warning"
                  className="py-2 px-lg-4 d-none d-lg-inline-block text-white fd-4"
                >
                  Get Started
                </Button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavBar;

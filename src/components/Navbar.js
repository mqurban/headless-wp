import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { fetchSettings, fetchPages } from '../api';

const Navbar = () => {
  const [siteTitle, setSiteTitle] = useState("Loading...");
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchSettings()
      .then(data => setSiteTitle(data.title))
      .catch(err => console.error("Error fetching site Title: ", err));

    fetchPages()
      .then(data => setMenuItems(data))
      .catch(err => console.error("Error fetching menu items: ", err));
  }, []);

  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">{siteTitle}</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse>
          <Nav className="me-auto">
            {menuItems.map(page => (
              <Nav.Link 
                key={page.id} 
                as={Link} 
                to={`/${page.slug}`}
              >
                {page.title.rendered}
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
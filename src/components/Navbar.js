import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/about">Aboutus</Nav.Link>
                    <Nav.Link href="/bills">Bills</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Menu;
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logs from '../../assets/img/farmacia.png'


export const NavBarMenu = (props) => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav.Link href="/">
                    <img src={logs} alt="logs" />
                </Nav.Link>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/unidades">Unidades</Nav.Link>
                    <Nav.Link href="/sobrenos">Sobre Nós</Nav.Link>
                    <Nav.Link href="/contato">Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
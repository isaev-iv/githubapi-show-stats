import React from "react";
import { Navbar, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">React Blog 2022</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">Liam Isaev / Frontend Developer</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

import React, { Component } from 'react';
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../userContext';




class Navigation extends Component {
    render() {
        return (
            <userContext.Consumer>
                {({ user, setUser }) => {
                    let home=""
                    if (user.name != '' && user.password != "")
                    {
                        home="/movies"
                    }
                    else
                    {
                        home="/login"
                    }
                    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Cinema</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="Home">
                            <Link to={home}>Home</Link>                     
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
                    );
                }}
            </userContext.Consumer>
        )
    }

}
export default Navigation;

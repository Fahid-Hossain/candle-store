
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
// import useFirebase from '../hooks/useFirebase/useFirebase';

const Navigation = () => {
    const {user,logoutHandler}= useAuth();
    console.log("from navigation",user);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">LuxuryCandleHOuse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/products">Products</Link>

                        </Nav>
                      { !user?.email ? <Nav>
                            <NavLink className="nav-link" eventKey={2} to="/memes">
                                Login
                            </NavLink>
                            <NavLink className="nav-link" to="/register">
                                Register
                            </NavLink>
                        </Nav> :  <div className="d-flex">
                            <h4 className="text-primary me-3">{user?.displayName}</h4>
                        <button onClick={logoutHandler} className="btn btn-primary">Logout</button>
                        </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
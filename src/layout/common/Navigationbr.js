import React from 'react'
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/logo.png'
export default function Navigationbr() {

    const navLinks = [
        {
            title: 'ALL ITEMS',
            link: '/all-items',
        },
        {
            title: 'DRESSES',
            link: '/dresses',
        },
        {
            title: 'SEASONAL',
            link: '/seasonal',
        },
        {
            title: 'DENIMS',
            link: '/denims',
        },
        {
            title: 'TSHART',
            link: '/t-shart',
        },
        {
            title: 'TOP',
            link: '/top',
        },
        {
            title: '',
            link: '',
        },
    ];

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'teal' }}>
                <img
                    src={Logo}
                    width="30"
                    height="30"
                    style={{ marginLeft: '2%' }}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="#home">
                    nPfashion</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {
                            navLinks.map((val, key) => {
                                return <Nav.Link
                                    href={val.link}
                                    key={key}
                                    style={{
                                        color: 'white',
                                        textAlign: 'center'
                                    }}>
                                    {val.title}
                                </Nav.Link>
                            })
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes" style={{ color: 'white' }}>
                            CART
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}



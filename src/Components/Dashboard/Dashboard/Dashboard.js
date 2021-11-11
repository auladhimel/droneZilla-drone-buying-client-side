import React from 'react';
import { Container } from 'react-bootstrap';
// import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <Container>
            <div class="sidenav">
                <h3>Dashboard</h3>
                <NavLink to="#about">Pay</NavLink>
                <NavLink to="#services">My Orders</NavLink>
                <NavLink to="#clients">Reviews</NavLink>
                <NavLink to="#contact">Logout</NavLink>
            </div>

            <div class="main">
                <h2>Dashboard</h2>
                <p>This sidebar is of full height (100%) and always shown.</p>
                <p>Scroll down the page to see the result.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>

            </div>
        </Container>
    );
};

export default Dashboard;
import React from 'react';
import { Container } from 'react-bootstrap';
import Orders from '../Orders/Orders';
import './DashboardHome.css';
import dashboard from '../../../images/dashboard.jpeg';
// dashboard home component 
const DashboardHome = () => {
    return (
        <Container class="main ms-5 ps-5">
            <h2 style={{ paddingTop: "30px", marginBottom: "20px", fontSize: "30px", fontWeight: "bold" }}>Dashboard</h2>
            <img style={{ borderRadius: "10px", width: "50%" }} src={dashboard} alt="" />
            <Orders></Orders>
        </Container>
    );
};

export default DashboardHome;
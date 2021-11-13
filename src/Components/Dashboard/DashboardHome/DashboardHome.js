import React from 'react';
import { Container } from 'react-bootstrap';
import Orders from '../Orders/Orders';
import './DashboardHome.css';
import dashboard from '../../../images/dashboard.jpeg';
// dashboard home component 
const DashboardHome = () => {
    return (
        <Container class="main ps-5">
            <h2 style={{ paddingTop: "30px", marginBottom: "20px", fontSize: "30px", fontWeight: "bold" }}>Dashboard</h2>
            <img style={{ borderRadius: "10px" }} src={dashboard} alt="" />
        </Container>
    );
};

export default DashboardHome;
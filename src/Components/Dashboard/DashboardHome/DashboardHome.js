import React from 'react';
import { Container } from 'react-bootstrap';
import Orders from '../Orders/Orders';
import './DashboardHome.css';
import dashboard from '../../../images/dashboard.jpeg';
// dashboard home component 
const DashboardHome = () => {
    return (
        <div className="main ms-5 ps-5">
            <Orders></Orders>
        </div>
    );
};

export default DashboardHome;
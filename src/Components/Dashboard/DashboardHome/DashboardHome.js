import React from 'react';
import { Container } from 'react-bootstrap';
import Orders from '../Orders/Orders';
import './DashboardHome.css';
import dashboard from '../../../images/dashboard.jpeg';
// dashboard home component 
const DashboardHome = () => {
    return (
        <div className="main ms-5 ps-5">
            <h1 style={{paddingTop:"20px", fontWeight:"bold"}}>Welcome To Your Dashboard</h1>
            <div className="dashboardImage">
                <img src="https://cdn.dribbble.com/users/2424774/screenshots/6533055/05_organize.png"></img>
            </div>
                 <Orders></Orders>
        </div>
    );
};

export default DashboardHome;
import React from 'react';
import { Container } from 'react-bootstrap';
// import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddReviews from '../AddReviews/AddReviews';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <Container>
            <div class="sidenav">
                <h3>Dashboard</h3>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to={`${url}`}>Dashboard</NavLink>
                <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
                <NavLink to={`${url}/addReviews`}>Add Reviews</NavLink>
            </div>

            <div>
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addReviews`}>
                        <AddReviews></AddReviews>
                    </Route>
                </Switch>
            </div>
        </Container>
    );
};

export default Dashboard;
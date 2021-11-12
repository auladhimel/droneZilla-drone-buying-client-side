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
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <Container>
            <div class="sidenav">
                <h3>Dashboard</h3>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to={`${url}`}>My Orders</NavLink>
                {admin && <div>
                    <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
                    <NavLink to={`${url}/addProducts`}>Add Products</NavLink>
                    <NavLink to={`${url}/manageOrders`}>Manage Orders</NavLink>
                    <NavLink to={`${url}/manageProducts`}>Manage Products</NavLink>
                </div>}
                {!admin && <div>
                    <NavLink to={`${url}/addReviews`}>Add Review</NavLink>
                    <NavLink to={`${url}/pay`}>Pay</NavLink>
                </div>}
                <NavLink to={`${url}/logout`}>Logout</NavLink>
            </div>

            <div>
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/addReviews`}>
                        <AddReviews></AddReviews>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </div>
        </Container>
    );
};

export default Dashboard;
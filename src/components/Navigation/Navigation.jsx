import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import { Component } from 'react';

const Navigation=function({name}){
    return(
        <Navbar bg="dark" expand="lg"   style={{width:"100%"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white m-lg-2" style={{textDecoration:"none"}} to="/">Home</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white m-lg-2" style={{textDecoration:"none"}} to="/contact" >Contact</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white m-lg-2" style={{textDecoration:"none"}} to="/notification">Notification</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white m-lg-2" style={{textDecoration:"none"}} to="/hospital">Hospital</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white m-lg-2" style={{textDecoration:"none"}} to="/medical">Medical</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white m-lg-2" style={{textDecoration:"none"}} to="/daily">Daily Report</NavLink>
                </Nav>
        </Navbar>
    );
};
export default Navigation;
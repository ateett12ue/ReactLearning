import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <React.Fragment>
                {/*can be used in short form <></>, may not support browser, alternative to div, div add one more node to DOM, by using it we add react element directly to DOM*/ }
                <Navbar dark expand="md">
                    <div className="container ml-4">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorant Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>About Us
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>Menu
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>

                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorant Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines, and cretae a unique fusion experiance. Our lipmacking creation will tickle your culinary sense</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;
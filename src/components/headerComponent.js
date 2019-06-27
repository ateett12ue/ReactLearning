import React, {Component} from 'react';
import {Navbar, NavbarBrand, Row, Col, Jumbotron} from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                {/*can be used in short form <></>, alternative to div, div add one more node to DOM, by using it we add react element directly to DOM*/ }
                <Navbar dark>
                    <div className="container ml-4">
                        <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
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
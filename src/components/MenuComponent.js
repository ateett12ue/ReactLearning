import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row, Col} from 'reactstrap';
import '../../src/App.css';
class Menu extends Component {
    constructor(props) {
        super(props);        
    }
    render() { 
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id}>
                <Row>
                <Col className="Fixed">
                    <Card body onClick={()=>this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Col>
                </Row>  
                </div>
            );
        });
        
        return (
           <div className="container">
            <Row>
                    {menu}
            </Row>
           </div> 
        );
    }
}

export default Menu;
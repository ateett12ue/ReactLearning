
import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row, Col} from 'reactstrap';
import DishDetail from './DishDetail';
import '../../src/App.css';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //store properties of component
            selectedDish: null
        }
        
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish})
    }

    
    render() { 
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id}>
                <Row>
                <Col className="Fixed">
                    <Card body onClick={()=>this.onDishSelect(dish)}>
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
            <Row>
                <DishDetail dish={this.state.selectedDish}/>
            </Row>
           </div> 
        );
    }
}

export default Menu;
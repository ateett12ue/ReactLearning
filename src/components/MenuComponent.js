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
        console.log('Menu Component constructor is called');
    }

    componentDidMount(){
        console.log('Menu Component componentDidMount is called');
    }



    onDishSelect(dish){
        console.log('Menu Component onDishSelect is called');
        this.setState({selectedDish:dish})
    }

    renderDish(dish){
        console.log('Menu Component renderDish is called');
        if(dish!=null){
            return(
                <Row>
                    <Col className="Fixed">
                        <Card body className="dishReview">
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                                <CardTitle>{dish.name}</CardTitle>
                                  <CardText>{dish.description}</CardText>
                        </Card>
                    </Col>
                    <Col className="Fixed Comments dishReview">
                        <Card body className="dishReview">
                                <CardTitle><strong>Comments</strong></CardTitle>
                                <CardText><DishDetail dish={this.state.selectedDish}/></CardText> 
                        </Card>
                    </Col>
                </Row>
                
            );
        }
        else{
            return(
                <div><p></p></div>
            );
        }
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
        
        console.log('Menu Component render is called');
        return (
           <div className="container">
            <Row>
                    {menu}
            </Row>
            <Row>
                {this.renderDish(this.state.selectedDish)}
            </Row>
           </div> 
        );
    }
}

export default Menu;
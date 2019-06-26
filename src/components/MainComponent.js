import React, { Component } from 'react';
import {Navbar, NavbarBrand, Row, Col} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import '../../src/App.css';
import {DISHES} from '../shared/dishes';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  
  onDishSelect(dishId){
    this.setState({selectedDish: dishId})
}
  
  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container ml-4">
          <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Row>
      <Menu dishes={this.state.dishes} 
      onClick={(dishId)=>this.onDishSelect(dishId)}/>
      </Row>
      <Row>
      <DishDetail 
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </Row>
    </div>
    )};
}

export default Main;

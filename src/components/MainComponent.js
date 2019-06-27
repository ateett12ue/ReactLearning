import React, { Component } from 'react';
import {Row} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import Header from './headerComponent.js';
import Footer from './footerComponent.js';
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
        <Header />
      <Row>
      <Menu dishes={this.state.dishes} 
      onClick={(dishId)=>this.onDishSelect(dishId)}/>
      </Row>
      <Row>
      <DishDetail 
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </Row>
      <Footer />
    </div>
    )};
}

export default Main;

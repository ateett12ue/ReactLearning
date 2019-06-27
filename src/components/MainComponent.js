import React, { Component } from 'react';
import {Row} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import Header from './headerComponent.js';
import Footer from './footerComponent.js';
import Home from './homeComponent'
import '../../src/App.css';
import {DISHES} from '../shared/dishes';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }



  
  render(){
    const HomePage = () => {
        return(
             <Home />
        );
    }
  return (
    <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
            <Redirect to="/home" />
        </Switch>
      <Footer />
    </div>
    )};
}

export default Main;

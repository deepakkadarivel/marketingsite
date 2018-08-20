import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../header/HeaderComponent';
import StepperComponent from '../stepper/StepperComponent';
import ChartComponent from '../chart/ChartComponent';
import TestimonialsComponent from '../testimonials/TestimonialsComponent';
import FooterComponent from '../footer/FooterComponent';
import ToolbarComponent from '../toolbar/ToolbarComponent';
import SideDrawer from '../sideDrawer/SideDrawer';
import Backdrop from '../backdrop/Backdrop';
import Home from '../home/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false
    };
  }

  render() {
    const drawerToggleClickHandler = () => {
      this.setState(prevState => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
    };

    return (
      <div className="App">
        <ToolbarComponent drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {this.state.sideDrawerOpen && (
          <Backdrop drawerClickHandler={drawerToggleClickHandler} />
        )}
        <Home />
        <FooterComponent />
      </div>
    );
  }
}

export default App;

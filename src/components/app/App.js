import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../header/HeaderComponent';
import StepperComponent from '../stepper/StepperComponent';
import ChartComponent from '../chart/ChartComponent';
import TestimonialsComponent from '../testimonials/TestimonialsComponent';
import FooterComponent from '../footer/FooterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <StepperComponent />
        <ChartComponent />
        <TestimonialsComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;

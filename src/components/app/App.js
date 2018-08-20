import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import FooterComponent from '../footer/FooterComponent';
import ToolbarComponent from '../toolbar/ToolbarComponent';
import SideDrawer from '../sideDrawer/SideDrawer';
import Backdrop from '../backdrop/Backdrop';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default App;

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
import News from '../news/News';
import Zinc from '../zinc/Zinc';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import TestimonialDetail from '../testimonialDetail/TestimonialDetail';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    this.setState(prevState => {
      return { sideDrawerOpen: false };
    });
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
        <Switch basename={window.location.pathname || ''}>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/news" component={News} />
          <Route exact path="/zinc" component={Zinc} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/testimonial"
            component={TestimonialDetail}
            onChange={() => window.scrollTo(0, 0)}
          />
          <Route component={Home} />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default withRouter(App);

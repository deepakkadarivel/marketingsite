import React, { Component } from 'react';
import './signup.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import firebase from 'firebase';
import Backdrop from '../backdrop/Backdrop';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      role: 'TEACHER',
      usage: 'NO',
      contactDetail: 'SCHEDULE A DEMO',
      dateOption1: '',
      dateOption2: '',
      how: '',
      showMessage: false
    };

    const config = {
      apiKey: 'AIzaSyDrTEXpqKnbnytvsYnl4kEiYhfnrxWO-P0',
      authDomain: 'contactform-cadc1.firebaseapp.com',
      databaseURL: 'https://contactform-cadc1.firebaseio.com',
      projectId: 'contactform-cadc1',
      storageBucket: 'contactform-cadc1.appspot.com',
      messagingSenderId: '133239038658'
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let messagesRef = firebase.database().ref('messages');
    const saveMessage = () => {
      let newMessageRef = messagesRef.push();
      newMessageRef.set(
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          role: this.state.role,
          usage: this.state.usage,
          contactDetail: this.state.contactDetail,
          dateOption1: this.state.dateOption1,
          dateOption2: this.state.dateOption2,
          howDoYouKnowUs: this.state.how
        },
        () => {
          this.setState({
            showMessage: true
          });
          window.scrollTo(0, 0);
        }
      );
    };
    return (
      <div className="signup">
        {this.state.showMessage && <Backdrop />}
        {this.state.showMessage && (
          <div className="signup--message">
            <h2>Thank you for signing up.</h2>
            <p>
              You are very important to us, all information received will always
              remain confidential. We will contact you as soon as we review your
              message.
            </p>
            <Link to="/" className="signup--message__link">
              OK
            </Link>
          </div>
        )}
        <SectionTitleComponent
          subHeader={'ALL OF YOUR QUESTIONS WERE ANSWERED?'}
        />
        <div className="signup__content">
          <div>
            <input
              className="input firstName"
              type="text"
              placeholder="FIRST NAME*"
              value={this.state.firstName}
              onChange={e => this.setState({ firstName: e.target.value })}
            />
            <input
              className="input lastName"
              type="text"
              placeholder="LAST NAME*"
              value={this.state.lastName}
              onChange={e => this.setState({ lastName: e.target.value })}
            />
            <input
              className="input email"
              type="text"
              placeholder="EMAIL*"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <div className="input role">
              <p>WHAT’S YOUR ROLE?* &nbsp; &#9662; &nbsp;</p>
              <select
                className="select"
                onChange={e => this.setState({ role: e.target.value })}
                value={this.state.role}
              >
                {/* <option value="none"></option> */}
                <option value="TEACHER">TEACHER</option>
                <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                <option value="PARENT">PARENT</option>
                <option value="STUDENT">STUDENT</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div className="input usage">
              <p>
                DOES YOUR SCHOOL USE SPRINGBOARD DIGITAL?* &nbsp; &#9662; &nbsp;
              </p>
              <select
                className="select"
                onChange={e => this.setState({ usage: e.target.value })}
                value={this.state.usage}
              >
                {/* <option value="none"></option> */}
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
            </div>
            <div className="input contactDetail">
              <p>
                WHAT DID YOU WANT TO CONTACT US ABOUT?* &nbsp; &#9662; &nbsp;
              </p>
              <select
                className="select"
                onChange={e => this.setState({ contactDetail: e.target.value })}
                value={this.state.contactDetail}
              >
                {/* <option value="none"></option> */}
                <option value="SCHEDULE A DEMO">SCHEDULE A DEMO</option>
                <option value="SALES INQUIRY">SALES INQUIRY</option>
                <option value="NEWSLETTER SIGN UP">NEWSLETTER SIGN UP</option>
                <option value="TECH SUPPORT">TECH SUPPORT</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div className="input date">
              <p>
                {' '}
                FOR DEMO SCHEDULING, PLEASE LIST TWO POSSIBLE TIMES FOR THE 45
                MINUTE CALL
              </p>
              <p>OPTION #1</p>
              <input
                className="input"
                type="text"
                placeholder="DATE & TIME"
                value={this.state.dateOption1}
                onChange={e => this.setState({ dateOption1: e.target.value })}
              />
              <p>OPTION #1</p>
              <input
                className="input"
                type="text"
                placeholder="DATE & TIME"
                value={this.state.dateOption2}
                onChange={e => this.setState({ dateOption2: e.target.value })}
              />
            </div>
            <input
              className="input how"
              type="text"
              placeholder="HOW DID YOU HEAR ABOUT US?"
              value={this.state.how}
              onChange={e => this.setState({ how: e.target.value })}
            />
          </div>
          <div
            className="submit"
            onClick={() => {
              if (
                this.state.firstName !== '' ||
                this.state.lastName !== '' ||
                this.state.email !== ''
              ) {
                saveMessage();
              }
            }}
          >
            <p>SUBMIT</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

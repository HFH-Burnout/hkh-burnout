import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import axios from 'axios';

const style = {
  margin: 0,
  backgroundColor: '#F5F5F5',
  position: 'relative',
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleClick() {
    const loginObj = {
      username: this.state.username,
      password: this.state.password,
    };
    axios.post('/login', loginObj)
    .then((response) => {
      if (response.status === 200) {
        // console.log('sign up successful');
        // this.props.history.push('/timeline');
      } else if (response.status === 204) {
        // this.props.history.push('/login');
      }
    })
    .catch((error) => {
      console.log(error, 'Error');
    });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          LOGIN
            <div className="login" >
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                fullWidth
                onChange={(event, newValue) => this.setState({ username: newValue })}
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                fullWidth
                onChange={(event, newValue) => this.setState({ password: newValue })}
              />
              <br />
              <FlatButton label="Login" style={style} fullWidth onClick={event => this.handleClick(event)} />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

Login.propType = {
  history: PropTypes.object.isRequired,
};

export default Login;
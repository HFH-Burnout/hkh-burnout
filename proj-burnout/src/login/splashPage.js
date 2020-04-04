import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import React from 'react';

const style = {
  margin: 12,
  backgroundColor: '#0000FF',
  display: 'block',
  position: 'relative',
};

const SplashPage = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <FlatButton label="Login" containerElement={<Link to="/login" />} style={style} />
        <FlatButton label="Register" containerElement={<Link to="/registration" />} style={style} />
      </div>
    </MuiThemeProvider>
  </div>
);

export default SplashPage;

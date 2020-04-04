import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import { ReactTypeformEmbed } from 'react-typeform-embed';
import './App.scss';

import SplashPage from './login/splashPage';
import Login from './login/login';
import Registration from './login/registration';
import Results from './dailyMeasure/results';
import Survey from './dailyMeasure/survey';

// function App() {
//   return (
//    <ReactTypeformEmbed url="https://demo.typeform.com/to/njdbt5" />
//   );
// }

// export default App;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route exact path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/survey" component={Survey} />
      <Route path="/results" component={Results} />
    </Switch>
  </BrowserRouter>  
);

export default App;
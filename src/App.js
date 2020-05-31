import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import { Container } from 'semantic-ui-react';
import DefaultPage from './pages/DefaultPage';
import ThanksPage from './pages/ThanksPage';

const App = () => {
  return (
    <Router>
      <Container textAlign="center" style={{ margin: '2em' }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <DefaultPage />
          </Route>
          <Route path="/thanks" exact>
            <ThanksPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

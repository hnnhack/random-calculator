import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './component/Header';
import { Container } from 'semantic-ui-react';
import DefaultPage from './page/default';
import ThanksPage from './page/thanks';

function App() {
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
}

export default App;

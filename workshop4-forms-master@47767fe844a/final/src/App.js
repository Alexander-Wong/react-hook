import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import RHFRaqPage from './pages/RHFRaqPage';
import ControlledRaqPage from './pages/ControlledRaqPage';
import VehicleSelectionPage from './pages/VehicleSelectionPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/vehicle/:vehicleId">
            <VehicleDetailsPage />
          </Route>
          <Route path="/raq-rhf">
            <RHFRaqPage />
          </Route>
          <Route path="/raq-controlled">
            <ControlledRaqPage />
          </Route>
          <Route exact path="/">
            <VehicleSelectionPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

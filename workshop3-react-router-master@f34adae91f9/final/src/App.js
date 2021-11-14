import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import RAQPage from './pages/RAQPage';
import VehicleSelectionPage from './pages/VehicleSelectionPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    
    <Router>
      <Layout>
        <Switch>
          <Route path="/vehicle/:vehicleId">
            <VehicleDetailsPage/>
          </Route>
          <Route path="/raq">
            <RAQPage />
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

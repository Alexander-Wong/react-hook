import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './components/Layout';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import RHFRaqPage from './pages/RHFRaqPage';
import ControlledRaqPage from './pages/ControlledRaqPage';
import VehicleSelectionPage from './pages/VehicleSelectionPage';
// import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);

  const handleStyleMode = () => {
    setPrefersDarkMode(!prefersDarkMode);
  };

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout
          handleStyleMode={handleStyleMode}
          prefersDarkMode={prefersDarkMode}
        >
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
            {/* <Route path="/favorites">
              <FavoritesPage />
            </Route> */}
            <Route exact path="/">
              <VehicleSelectionPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

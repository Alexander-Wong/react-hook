import React, {useState} from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu'
import Switch from '@material-ui/core/Switch';
import { useStyles } from './Layout.styles';

const Layout = ({ handleStyleMode, prefersDarkMode, children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Menu />
      <main className={classes.layout}>{children}</main>

      <div className={classes.darkSwitchContainer}>
        Dark Mode   
        <Switch
          checked={prefersDarkMode}
          onChange={() => {
            handleStyleMode();
          }}
          name="darkMode"
        />
      </div>
    </>
  );
};

export default Layout;

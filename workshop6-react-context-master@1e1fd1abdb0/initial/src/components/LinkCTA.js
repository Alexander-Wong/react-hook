import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import {useStyles} from './LinkCTA.styles';
import PropTypes from 'prop-types'; 


function LinkCTA(props) {
  const {color, url, ...other} = props;
  const classes = useStyles(props);
  return <Link to={url}><Button className={classes.root} {...other}/></Link>;
}

LinkCTA.propTypes = {
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

export default LinkCTA;
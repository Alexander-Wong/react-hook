import React from 'react';
import { Link } from "react-router-dom";

const LinkCTA = ({ link }) => {
  return (
    <div className='link-cta'>
      <Link to={link.url}>{link.name}</Link>
    </div>
  );
};

export default LinkCTA;

import React from 'react';

const LinkCTA = ({ link }) => {
  return (
    <div className='link-cta'>
      <a href={link.url}>{link.name}</a>
    </div>
  );
};

export default LinkCTA;

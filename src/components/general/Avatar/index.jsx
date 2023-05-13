import React from 'react';
import './style.scss';
const Avatar = ({ name, url = null, size = 40 }) => {
  function getInitials() {
    const splitName = name.split(' ');
    const initials = splitName.map((n) => n[0]);
    return initials.join('');
  }
  return (
    <figure className="avatar" style={{ '--internal-size': `${size}px` }}>
      {url ? <img src={url} alt={name} /> : <span>{getInitials()}</span>}
    </figure>
  );
};

export default Avatar;

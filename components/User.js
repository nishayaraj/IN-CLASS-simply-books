/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PropTypes } from 'prop-types';

export default function User({
  name, email, image, lastLogin,
}) {
  return (
    <>
      <div>User</div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Image: <img src={image} alt={name} /></div>
      <div>LastLogin: {lastLogin}</div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  name: 'john',
  email: 'john@gmail.com',
  image: PropTypes.string,
  lastLogin: '01/01/2022 14:00:00',
};

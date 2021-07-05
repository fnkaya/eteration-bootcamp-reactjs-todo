import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='text-center mt-5'>
      <h1 className='m-5 fw-bold'>{title}</h1>
    </div>
  );
};

export default Header;

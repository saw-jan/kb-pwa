import React from 'react';
import Logo from '../icons/icon.svg';

const LogoIcon = ({ width = '24px', height = '24px' }) => {
  return (
    <div>
      <Logo width={width} height={height} />
    </div>
  );
};

export default LogoIcon;

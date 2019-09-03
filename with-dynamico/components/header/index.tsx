import React from 'react';    
import { Header as NBHeader  } from 'native-base';

const Header = ({children}: any) => (
  <NBHeader>
    {children}
  </NBHeader>
);

export default Header;
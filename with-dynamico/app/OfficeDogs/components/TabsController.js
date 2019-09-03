import React from 'react';
import {Text} from 'react-native';
import { dynamico } from '@dynamico/react';


export default dynamico('tabscontroller', {
    
    fallback: <Text>Loading...</Text>
  });
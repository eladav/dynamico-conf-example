import React from 'react';
import {Text} from 'react-native';
import { dynamico } from '@dynamico/react';

export default dynamico('dogslist', {
    fallback: <Text>Loading dogs...</Text>
  });
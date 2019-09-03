import React from 'react';
import {Text} from 'react-native';
import { dynamico } from '@dynamico/react';

export default dynamico('header', {
    fallback: <Text>Loading header...</Text>
  });
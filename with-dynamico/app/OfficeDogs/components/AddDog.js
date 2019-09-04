import React from 'react';
import {Text} from 'react-native';
import { dynamico } from '@dynamico/react';

export default dynamico('dog-form', {
    fallback: <Text>Form goes here...</Text>
  });
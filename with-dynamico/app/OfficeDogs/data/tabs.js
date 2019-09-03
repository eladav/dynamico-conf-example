import React from 'react';
import {Text} from 'react-native';
import DogsList from '../components/DogsList';
import dogs from './dogs';
export default [
    {
      heading: 'Dogs',
      Page: () => <DogsList dogs={dogs} />
    },
    {
      heading: 'Add dog',
      Page: () => <Text>add dog form...</Text>
    }
  ];
import React from 'react';
import DogsList from '../components/DogsList';
import dogs from './dogs';
import AddDog from '../components/AddDog';
export default [
    {
      heading: 'Dogs',
      Page: () => <DogsList dogs={dogs} />
    },
    {
      heading: 'Add dog',
      Page: () => <AddDog name="my doggy"></AddDog>
    }
  ];
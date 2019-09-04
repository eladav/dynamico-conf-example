import React from 'react';    
import {
  View,
  TextInput,
  Text
} from 'react-native';

const DogForm = ({name} : {name: string}) => (
  <View>
    <Text testID="text">Your {name} component</Text>
    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} placeholder="Hi"></TextInput>
  </View>
);

export default DogForm;
import React from 'react';    
import {
  Image,
  Text,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import { Card, CardItem, Left, Toast } from 'native-base';

const DogCard = ({name, image}: any) => (
  <TouchableOpacity onPress={() => Toast.show({text: `${name} made a 💩`, buttonText: '🤦‍♂️'})}>
    <Card>
      <CardItem style={{justifyContent:'flex-start'}}>
        <Left>
          <Text style={{fontFamily: 'HelveticaNeue-ThinItalic', fontSize: 30}}>
            {name}
          </Text>
        </Left>
        </CardItem>
      <CardItem style={{justifyContent:'center'}}>
        <Image style={{resizeMode: 'contain', height:300, width:300}} source={ image} />
      </CardItem>
    </Card>
  </TouchableOpacity>
  
);
const renderRow = ({item: dog}: any) =>  (<View key={dog.name}><DogCard {...dog} /></View>);
const DogsList = ({dogs}: any) => (<FlatList data={dogs} renderItem={renderRow} keyExtractor={(d: any) => d.name} />);

export default DogsList;
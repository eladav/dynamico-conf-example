

import React, {useEffect, useState} from 'react';
import * as ReactNative from 'react-native';
import * as NativeBase from 'native-base';
import tabs from '../data/tabs';
import Header from './Header';

import ComponentsLodaer from './ComponentsLoader';

const { Text, View, StyleSheet } = ReactNative;
const { Container, Title, Root } = NativeBase;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });

const TabBar = ({tabs}) => {
  const [CompContainer, setComponent] = useState({});
  useEffect(() => {ComponentsLodaer().then(C => setComponent({view: C}));}, []);

  return CompContainer.view ? <CompContainer.view tabs={tabs} /> : <View></View>;
}

  console.warn('elad', tabs);
export default () =>{
                    return (<Root>
                    <Container>
                        <Header>
                            <Text>
                                <Title>Who 💩ed?</Title>
                            </Text>
                            </Header>          
                        <View style={styles.container}>
                        <TabBar tabs={tabs} />
                        </View>            
                    </Container>
                    </Root>);

}
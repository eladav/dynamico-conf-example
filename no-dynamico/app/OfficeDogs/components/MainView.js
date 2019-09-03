

import React, {useEffect, useState} from 'react';
import * as ReactNative from 'react-native';
import * as NativeBase from 'native-base';

import TabsController from './TabsController';
import tabs from '../data/tabs';
import Header from './Header';

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
                        <TabsController tabs={tabs} />
                        </View>            
                    </Container>
                    </Root>);

}
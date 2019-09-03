

import React, {Component} from 'react';
import * as ReactNative from 'react-native';
import * as NativeBase from 'native-base';
import { DynamicoClient } from '@dynamico/core';
import { DynamicoProvider } from '@dynamico/react';
import fetch from 'node-fetch';
import AbortController from 'abort-controller/dist/abort-controller.js';

import TabsController from './TabsController';
import tabs from '../data/tabs';
import Header from './Header';
import { dependencies } from '../package.json';

const { Text, View, AsyncStorage, StyleSheet, Button, TouchableOpacity } = ReactNative;
const { Container, Title, Root } = NativeBase;
global.AbortController = AbortController;

const resolvers = {
  react: React,
  'react-native': ReactNative,
  'native-base': NativeBase
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });

export default (baseUrl) => 
{
    const dynamicoClient = new DynamicoClient({
        url: `http://${baseUrl}/api/components`,
        dependencies: {
          resolvers,
          versions: dependencies
        },
        cache: AsyncStorage,
        fetcher: fetch
      });
    return () => <DynamicoProvider client={dynamicoClient}>
                    <Root>
                    <Container>
                        <Header>
                        <TouchableOpacity title={'Clear Cache'} onPress={() => AsyncStorage.clear()} >
                            <Text>Clear Cache</Text>
                          </TouchableOpacity>
                            <Text>
                                <Title>Who 💩ed?</Title>
                            </Text>
                            </Header>          
                        <View style={styles.container}>
                        <TabsController tabs={tabs} />
                        </View>            
                    </Container>
                    </Root>
                </DynamicoProvider>

}
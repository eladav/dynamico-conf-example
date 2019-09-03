/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState} from 'react';
import {View, Button, TextInput, StyleSheet, AsyncStorage} from 'react-native';
import MainViewBuilder from './components/MainView';


const UrlSetter = ({handler}) => { 
  const [text, setText] = useState('');
  return (<View>
              <TextInput
                  placeholder={'Components Server Url without http'}
                  autoCapitalize= 'none'
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={setText}
                  value={text}/>
                <Button title={'Go'} onPress={() => handler(text)} />
        </View>);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

// const MainView = MainViewBuilder('localhost:1234');
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      MainView: undefined
    }
  }

  async componentDidMount() {
    const url = await AsyncStorage.getItem('app_url');
    if (url) {
      const data = await fetch(`http://${url}`);
      if (data){
        this.setState({MainView: MainViewBuilder(url)})
      }
    }
  }

  setUrl(url) {
    AsyncStorage.setItem('app_url', url);
    this.setState({MainView: MainViewBuilder(url)})
  }

  render() {
    if (!this.state.MainView) {
      return (
        <View style={styles.container}>
          <UrlSetter handler={this.setUrl.bind(this)} />
        </View>
      );
    }
    const { MainView } = this.state;
    return (
      <MainView />
    );
  }
}



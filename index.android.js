import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { Notes, Header } from './src';

const ReactNativeReduxShell = () => <View>
  <Header>
    <Text>Some text</Text>
  </Header>
  <Notes />
</View>;

AppRegistry.registerComponent('ReactNativeReduxShell', () => ReactNativeReduxShell);

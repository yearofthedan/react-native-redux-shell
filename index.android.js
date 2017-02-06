import React from 'react';
import { View, AppRegistry } from 'react-native';
import { NotesView, Header } from './src';

const ReactNativeReduxShell = () => <View>
  <Header />
  <NotesView />
</View>;

AppRegistry.registerComponent('ReactNativeReduxShell', () => ReactNativeReduxShell);

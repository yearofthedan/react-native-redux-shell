import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text, AppRegistry } from 'react-native';

import { Notes, Header, reducers } from './src';

const store = createStore(reducers);

const ReactNativeReduxShell = () =>
  <Provider store={store}>
    <View>
      <Header>
        <Text>Some text</Text>
      </Header>
      <Notes />
    </View>
  </Provider>;
AppRegistry.registerComponent('ReactNativeReduxShell', () => ReactNativeReduxShell);

import React from 'react';
import { View, Text } from 'react-native';

const Note = ({ children }) => <View
  style={{
    height: 100,
    width: 200,
    backgroundColor: 'green',
    borderColor: 'blue',
    borderWidth: 2,
  }}
>
  <Text>{children}</Text>
</View>;

export default Note;

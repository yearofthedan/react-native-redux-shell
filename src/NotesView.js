import React from 'react';
import { View, ScrollView, Text } from 'react-native';

const data = [
  { title: 'Title the first' },
  { title: 'Title the second' },
  { title: 'Title the third' },
];

const NotesView = () =>
  <ScrollView
    style={{ height: 500, backgroundColor: 'blue' }}
  >
    { data.map(datum =>
      <View
        style={{
          height: 100,
          width: 200,
          backgroundColor: 'green',
          borderColor: 'black',
          borderWidth: 2,
        }}
      >
        <Text>{datum.title}</Text>
      </View>)}
  </ScrollView>
;

export default NotesView;

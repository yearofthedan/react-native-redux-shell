import React from 'react';
import styled from 'styled-components/native';
import Note from './Note';

const StyledNotesList = styled.ScrollView`
  height: 500;
  backgroundColor: blue;
`;

const data = [
  { title: 'Title the first' },
  { title: 'Title the second' },
  { title: 'Title the third' },
];

const Notes = () =>
  <StyledNotesList>
    { data.map(datum => <Note>{datum.title}</Note>)}
  </StyledNotesList>
;

export default Notes;

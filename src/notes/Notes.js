import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Note from './Note';

const StyledNotesList = styled.ScrollView`
  height: 500;
  backgroundColor: blue;
`;

const Notes = ({ notes }) =>
  <StyledNotesList>
    { notes.map(datum => <Note>{datum.title}</Note>)}
  </StyledNotesList>
;

const mapStateToProps = state => ({ notes: state.notes });
export default connect(mapStateToProps)(Notes);

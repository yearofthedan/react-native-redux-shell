import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('<Header>', () => {
  it('renders a Header component', () => {
    const rendered = shallow(<Header />);
    expect(rendered).not.toBeNull();
  });
});

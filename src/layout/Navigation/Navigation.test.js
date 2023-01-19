

import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';

describe('Navigation component', () => {

    const setup = () => render(<Navigation />, {wrapper: MemoryRouter});
    
    test('Should contain a list of links"', () => {
  
    setup();

    const list = screen.getAllByRole('link');
    expect(list).not.toHaveLength(0);
  })

});
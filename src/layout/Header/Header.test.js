import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header component', () => {
  test('Should have a title named "Westcoast Education"', () => {
    render(<Header />, {wrapper: MemoryRouter});

    const title = screen.getByRole('heading', {
        name: 'Westcoast Education'
    });

    expect(title).toBeInTheDocument();
  })
});
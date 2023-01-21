import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

describe('Footer component', () => {

const setup = () => render(<Footer />, {wrapper: MemoryRouter});

  test('Should have a title named "© Stockholm, 2023"', () => {
    setup();

    const title = screen.getByRole('heading', {
        name: '© Stockholm, 2023'
    });

    expect(title).toBeInTheDocument();
  })
});
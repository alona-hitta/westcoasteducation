

import { screen, render } from '@testing-library/react';
import App from './App';

describe('Routing', () => {
  const setup = () => render(<App />);

  test('Navigation and rendering correct component', async () => {
    setup();

    expect(screen.getByText(/Welcome to Westcoast Education/i)).toBeInTheDocument();
    expect(screen.getByText(/Here you can find lists of teachers, lists of courses, add teachers or courses/i)).toBeInTheDocument();

  });
});
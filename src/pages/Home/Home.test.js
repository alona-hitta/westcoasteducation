import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home page', () => {
  const setup = async () => render(<Home />);

  test('Should have a title named "Welcome to Westcoast Education"', async () => {
    await setup();

    const title = screen.getByText(/Welcome to Westcoast Education/i);

      expect(title).toBeInTheDocument();
  })
});
import { render, screen } from '@testing-library/react';
import Teachers from './Teachers';

describe('Teachers list page', () => {
  const setup = () => render(<Teachers />);

  test('Should contain a title named "Teachers"', () => {
    setup();

    const title = screen.getByText(/Teachers/i);
    expect(title).toBeInTheDocument();
  })
});
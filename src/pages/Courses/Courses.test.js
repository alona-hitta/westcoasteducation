import { render, screen } from '@testing-library/react';
import Courses from './Courses';

describe('Courses page', () => {
  const setup = () => render(<Courses />);

  test('Should have a title named "Courses"', () => {
    setup();

    const title = screen.getByText(/Courses/i); 
    expect(title).toBeInTheDocument();
  })
});  
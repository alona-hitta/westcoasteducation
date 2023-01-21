import { screen, render } from "@testing-library/react";
import TeachersList from "./TeachersList";

describe("TeachersList component", () => {
  const setup = () => render(<TeachersList />);

  describe("TeachersList page", () => {
    test('should have button with text "Read more"', () => {
      // Arrange
      setup();
      const button = screen.getByRole("button", {
        name: /read more/i,
      });

      // Act

      // Assert
      expect(button).toBeInTheDocument();
    });
  });
});
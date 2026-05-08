const { render, screen } = require("@testing-library/react");
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("Should load contact page", () => {
  render(<Contact />);

  const heading = screen.getByText("Contact Us");

  expect(heading).toBeInTheDocument();
});

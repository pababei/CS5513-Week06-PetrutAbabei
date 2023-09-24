import { render, screen } from "@testing-library/react";
import Entry from "../pages/people/[id]";
import "@testing-library/jest-dom";

describe("Entry", () => {
  it("renders a people entry", () => {
    render(<Entry />);

    const heading = screen.getByRole("heading", {
      name: /Member Info/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

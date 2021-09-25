import { render, screen } from "@testing-library/react";
import { Loader } from ".";

describe("Loader", () => {
  it("should render loader component correctly", () => {
    render(<Loader />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});

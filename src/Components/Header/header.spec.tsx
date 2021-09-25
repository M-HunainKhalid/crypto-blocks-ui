import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("should render header component correctly", () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });
});

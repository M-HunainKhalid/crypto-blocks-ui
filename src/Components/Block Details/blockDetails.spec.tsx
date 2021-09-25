import { render, screen } from "@testing-library/react";
import { BlockDetails } from ".";

describe("Block Detail", () => {
  const props = {
    blockIndex: 11111111,
    size: 112,
    fee: 200,
    prevBlock:
      "0000000000000000000abb37d731cb7159f1de07b7071a72b0292c1461e9b845",
  };
  it("should render block detail component correctly", () => {
    const blockDetails = render(<BlockDetails {...props} />);
    expect(screen.getByText(props.blockIndex)).toBeInTheDocument();
    expect(screen.getByText(props.size)).toBeInTheDocument();
    expect(screen.getByText(props.fee)).toBeInTheDocument();
    expect(screen.getByText(props.prevBlock)).toBeInTheDocument();
    expect(blockDetails).toMatchSnapshot();
  });
});

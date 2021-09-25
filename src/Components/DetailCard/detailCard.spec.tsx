import { render, screen } from "@testing-library/react";
import { DetailCard } from ".";

describe("Detail Card", () => {
  const props = {
    detailName: "Sample Detail",
    detailValue: "Sample Value",
  };
  it("should render detail card component correctly", () => {
    const detailCard = render(<DetailCard {...props} />);
    expect(screen.getByText(props.detailName)).toBeInTheDocument();
    expect(screen.getByText(props.detailValue)).toBeInTheDocument();
    expect(detailCard).toMatchSnapshot();
  });
});

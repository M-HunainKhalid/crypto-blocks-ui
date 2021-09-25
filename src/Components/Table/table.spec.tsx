import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Table } from ".";

const props = {
  rows: Array.from({ length: 30 }, (_, idx) => ({
    hash: `${idx}-sample-hash`,
    height: `${idx}-sample-height`,
  })),
  columns: [
    {
      id: "hash",
      label: "Hash",
    },
    {
      id: "height",
      label: "Height",
    },
  ],
  heading: "Sample Heading",
};

describe("Table", () => {
  it("should render table component correctly", () => {
    render(<Table {...props} />);
    props.columns.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    expect(screen.getAllByTestId("table-row").length).toBe(10);
    expect(screen.getByText("1-10 of 30")).toBeInTheDocument();
  });

  it("should change page", () => {
    render(<Table {...props} />);

    expect(screen.getByText("1-10 of 30")).toBeInTheDocument();
    fireEvent.click(screen.getByTitle(/Next page/));
    expect(screen.getByText("11-20 of 30")).toBeInTheDocument();
  });
});

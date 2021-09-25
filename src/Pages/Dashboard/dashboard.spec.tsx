import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { Dashboard } from ".";

describe("Dashboard", () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <Route path="/">
          <Dashboard />
        </Route>
      </MemoryRouter>
    );

  it("should render dashboard component correctly", async () => {
    renderComponent();
    await waitFor(() => {
      expect(screen.getByText("Blocks")).toBeInTheDocument();
      expect(
        screen.getByText("Click on the hash and get the details of a block.")
      ).toBeInTheDocument();
    });
  });
});

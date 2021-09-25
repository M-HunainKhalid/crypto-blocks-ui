import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Details } from ".";
import { detailsMockData, detailsMockUrlId } from "../../utils/mockData";

describe("Details", () => {
  const renderComponent = ({ id }: { id: string }) =>
    render(
      <MemoryRouter initialEntries={[`/${id}`]}>
        <Route path="/:id">
          <Details />
        </Route>
      </MemoryRouter>
    );

  beforeAll(() => {
    const mock = new MockAdapter(axios);
    mock
      .onGet(`http://localhost:8080/api/blocks/${detailsMockUrlId}`)
      .reply(200, detailsMockData);
  });

  it("should render details component correctly", async () => {
    renderComponent({ id: detailsMockUrlId });
    await waitFor(() => {
      expect(screen.getByText("Block Details")).toBeInTheDocument();
      expect(screen.getByText("Transactions")).toBeInTheDocument();
    });
  });
});

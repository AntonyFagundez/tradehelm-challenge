import React from "react";
import {render, screen} from "@testing-library/react";

import DataProvider from "./Context/DataProvider";
import {State} from "./types/State";
import App from "./App";

const mockState: State = {
  data: [
    {
      id: "0e9r8w0943859034",
      label: "test prueba",
    },
  ],
  hasError: false,
  isLoading: false,
  errorMessage: "",
};

describe("<App/>", () => {
  test("renders Title", () => {
    render(<App />);
    const title = screen.getByText(/SuperMarket List/i);

    expect(title).toBeInTheDocument();
  });

  test("should have 'Add Item' Button", () => {
    render(<App />);
    const btn = screen.getByRole("button", {
      hidden: true,
      name: "Add item",
    });

    expect(btn).toBeInTheDocument();
  });

  it("should have zero items", async () => {
    render(<App />);

    const labelItems = await screen.findByText(/\(0\) items/i);

    expect(labelItems).toBeInTheDocument();
  });

  it("should have one item label", async () => {
    render(
      <DataProvider initialState={mockState}>
        <App />
      </DataProvider>,
    );

    const labelItems = await screen.findByText(/\(1\) items/i);

    expect(labelItems).toBeInTheDocument();
  });

  it("should have one item card", async () => {
    render(
      <DataProvider initialState={mockState}>
        <App />
      </DataProvider>,
    );

    const item = await screen.findByText(mockState.data[0].label);

    expect(item).toBeInTheDocument();
  });

  it("should have posibility to delete", async () => {
    render(
      <DataProvider initialState={mockState}>
        <App />
      </DataProvider>,
    );

    const deleteItemSpan = await screen.findByText("delete");

    expect(deleteItemSpan).toBeInTheDocument();

    deleteItemSpan.click();

    expect(deleteItemSpan).not.toBeInTheDocument();
  });
});

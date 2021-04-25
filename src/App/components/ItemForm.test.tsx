import React from "react";
import {render, screen} from "@testing-library/react";

import App from "../App";

describe("CardComponent", () => {
  it("should have input", async () => {
    render(<App />);
    const addButton = await screen.findByRole("button");

    addButton.click();

    const input = await screen.findByLabelText("item-label");

    expect(input).toBeInTheDocument();
  });

  it("should have 'cancel' button", async () => {
    render(<App />);
    const addButton = await screen.findByRole("button");

    addButton.click();

    const cancelBttn = screen.getByRole("button", {
      name: "Close",
    });

    expect(cancelBttn).toBeInTheDocument();
  });

  it("should have 'Add' button", async () => {
    render(<App />);
    const addButton = await screen.findByRole("button");

    addButton.click();

    const addBttn = screen.getByRole("button", {
      name: "Add",
    });

    expect(addBttn).toBeInTheDocument();
  });

  it("should have 'Add' button disabled if input is empty", async () => {
    render(<App />);
    const addButton = await screen.findByRole("button");

    addButton.click();

    const addBttn = screen.getByRole("button", {
      name: "Add",
    }) as HTMLButtonElement;

    expect(addBttn.disabled).toBeTruthy();
  });

  it("should remove a Component with close Button", async () => {
    render(<App />);
    const addButton = await screen.findByRole("button");

    addButton.click();

    const cancelBttn = screen.getByRole("button", {
      name: "Close",
    });

    cancelBttn.click();

    expect(cancelBttn).not.toBeInTheDocument();
  });
});

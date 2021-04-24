import React from "react";
import {render, screen} from "@testing-library/react";

import App from "../App";

describe("CardComponent", () => {
  it("should render", async () => {
    render(<App />);
    const addButton = await screen.findByRole("button");

    addButton.click();

    const input = await screen.findByLabelText("item-label");

    expect(input).toBeInTheDocument();
  });
});

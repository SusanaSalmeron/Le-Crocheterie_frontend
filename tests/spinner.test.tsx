import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Spinner from "../pages/(spinner)";

describe("<Spinner />", () => {
  test("it should mount", () => {
    render(<Spinner size={80} />);

    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
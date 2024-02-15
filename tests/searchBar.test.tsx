import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "../components/SearchBar";


describe("<SearchBar />", () => {
  test("it should mount", () => {
    render(<SearchBar />);

    const searchBar = screen.getByTestId("SearchBar");
    expect(searchBar).toBeInTheDocument()
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument()
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  });
});
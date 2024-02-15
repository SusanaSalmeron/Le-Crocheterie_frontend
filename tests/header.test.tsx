import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../components/Header";

describe("<Header />", () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { }
    };
  };
  test("it should mount", () => {
    render(
      <Header />
    );

    const header = screen.getByTestId("Header");
    expect(header).toBeInTheDocument();
    const menu = screen.getByTestId("NavbarMenu")
    expect(menu).toBeInTheDocument()
    const searchBar = screen.getByTestId("SearchBar")
    expect(searchBar).toBeInTheDocument()
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "/_next/image?url=%2Flogo.png&w=384&q=75")
  });
});
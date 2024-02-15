import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeCarousel from "../components/HomeCarousel";

describe("<Carousel />", () => {
  test("it should mount", () => {
    render(<HomeCarousel />);

    const carousel = screen.getByTestId("Carousel");
    expect(carousel).toBeInTheDocument();
    const images = screen.getAllByRole("img")
    expect(images).toHaveLength(4)
  });
});
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductDetails from "../app/products/[productId]/details/page";
import { useRouter } from "next/router"


jest.mock("next/router", () => ({
  useRouter() {
    return ({
      query: "7"
    })
  }
}))

describe("<ProductDetails />", () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { }
    };
  };

  test("it should show product details correctly", async () => {
    render(
      <ProductDetails product={{ id: 5, name: "Pochi", material: ["cotton"], colors: ["pink"], description: "asdfghj", price: 15 }} catalogs={{ "colors": ["pink", "blue"], "materials": ["cotton"], "sizes": { "l": 25, "m": 15, "s": 10 } }} />
    )

    const productDetails = screen.getByTestId("productDetails");
    expect(productDetails).toBeInTheDocument();
    const img = screen.getAllByRole("img")
    expect(img).toHaveLength(2)
    expect(img[0]).toHaveAttribute("src", "/_next/image?url=%2Flogo.png&w=384&q=75")
    expect(img[1]).toHaveAttribute("src", "/_next/image?url=https%3A%2F%2Fdk1ny38iy5de8.cloudfront.net%2Fundefined%2Fmain.jpg&w=1920&q=75")
    const name = screen.getAllByRole("heading")
    expect(name).toHaveLength(2)
    await waitFor(() => {
      expect(name[1]).toHaveTextContent("10€ - 25€")
    })
    await waitFor(() => {
      expect(name[0]).toHaveTextContent("Pochi")
    })
    const detailsForm = screen.getByTestId("detailsForm")
    expect(detailsForm).toBeInTheDocument()
  });
});
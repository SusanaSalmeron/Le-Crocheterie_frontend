import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetails from './productDetails';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    productId: "5"
  })
}))

describe('<ProductDetails />', () => {
  const productService = require('../../services/productsService')
  const catalogService = require('../../services/catalogService')
  test('it should show product details correctly', async () => {
    jest.spyOn(productService, 'getProductBy').mockResolvedValueOnce({ id: 5, name: "Pochi", material: "cotton", colors: ["pink"], description: "asdfghj", price: 15 })
    jest.spyOn(catalogService, 'getCatalogs').mockResolvedValue({ "colors": ["pink", "blue"], "materials": ["cotton"], "sizes": { "l": 25, "m": 15, "s": 10 } })

    render(
      <BrowserRouter>
        <ProductDetails />
      </BrowserRouter>);

    const productDetails = screen.getByTestId('productDetails');
    expect(productDetails).toBeInTheDocument();
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://d1ccwz5tu7strp.cloudfront.net/5/main.jpg')
    const name = screen.getAllByRole('heading')
    expect(name).toHaveLength(2)
    await waitFor(() => {
      expect(name[1]).toHaveTextContent('10€ - 25€')
    })
    await waitFor(() => {
      expect(name[0]).toHaveTextContent('Pochi')
    })
    const detailsForm = screen.getByTestId('detailsForm')
    expect(detailsForm).toBeInTheDocument()
  });
});
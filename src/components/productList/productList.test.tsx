import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './productList';
import { BrowserRouter } from 'react-router-dom';

window.scrollTo = jest.fn()

const testProducts = [
  { id: 1, name: "Pochi", material: "cotton", colors: ["pink"], description: "asdfg", price: 15 },
  { id: 2, name: "Legs", material: "cotton", colors: ["blue"], description: "asghjg", price: 20 }
]

describe('<ProductList />', () => {
  afterEach(jest.clearAllMocks)
  const productService = require('../../services/productsService')
  test('it should show all products', async () => {

    jest.spyOn(productService, 'getAllProducts').mockResolvedValue(testProducts)
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()

    await waitFor(() => {
      const productList = screen.getByTestId('productList');
      expect(productList).toBeInTheDocument();
    })
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent('PRODUCTS')
    const products = screen.getAllByTestId('productCard')
    expect(products).toHaveLength(2)
    const name = screen.getByText('Pochi')
    expect(name).toBeInTheDocument()
    const name2 = screen.getByText('Legs')
    expect(name2).toBeInTheDocument()
  });

  test('it should show "No products in this category"', async () => {

    jest.spyOn(productService, 'getAllProducts').mockResolvedValue([])
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()

    await waitFor(() => {
      const productList = screen.getByTestId('productList')
      expect(productList).toBeInTheDocument()
    })
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent('No products in this category')
    const name = screen.queryByText('Pochi')
    expect(name).not.toBeInTheDocument()
  });
});
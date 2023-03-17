import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './productList';
import { BrowserRouter } from 'react-router-dom';

describe('<ProductList />', () => {
  test('it should mount', async () => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    /* const productList = screen.getByTestId('productList');

    await expect(productList).toBeInTheDocument(); */
  });
});
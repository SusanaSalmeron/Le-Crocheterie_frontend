import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './productList';

describe('<ProductList />', () => {
  test('it should mount', () => {
    render(<ProductList />);

    const productList = screen.getByTestId('productList');

    expect(productList).toBeInTheDocument();
  });
});
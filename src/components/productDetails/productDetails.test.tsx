import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetails from './productDetails';

describe('<ProductDetails />', () => {
  test('it should mount', () => {
    render(<ProductDetails />);

    const productDetails = screen.getByTestId('ProductDetails');

    expect(productDetails).toBeInTheDocument();
  });
});
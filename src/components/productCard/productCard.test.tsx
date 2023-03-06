import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './productCard';

describe('<ProductCard />', () => {
  test('it should mount', () => {
    render(<ProductCard />);
    const productCard = screen.getByTestId('productCard');
    expect(productCard).toBeInTheDocument();
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'https://d1ccwz5tu7strp.cloudfront.net/1/main.jpg')
    const button = screen.getByRole('button')
    const icon = screen.queryByTestId('icon')
    fireEvent.mouseEnter(button)
    expect(icon).toHaveClass("fa-solid fa-heart")
    fireEvent.mouseLeave(button)
    expect(icon).toHaveClass("fa-regular fa-heart")
  });
});
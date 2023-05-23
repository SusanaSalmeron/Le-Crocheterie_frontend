import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from '../pages/(productCard)';


describe('<ProductCard />', () => {
  test('it should mount', () => {
    render(
      <ProductCard id={5} name={"Pochi"} price={20} />
    )

    const productCard = screen.getByTestId('productCard');
    expect(productCard).toBeInTheDocument();
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fd1ccwz5tu7strp.cloudfront.net%2F5%2Fmain.jpg&w=256&q=75')
    const button = screen.getByRole('button')
    const icon = screen.queryByTestId('icon')
    fireEvent.mouseEnter(button)
    expect(icon).toHaveClass("fa-solid fa-heart")
    fireEvent.mouseLeave(button)
    expect(icon).toHaveClass("fa-regular fa-heart")
  });
});
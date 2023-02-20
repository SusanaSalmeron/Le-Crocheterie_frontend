import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarMenu from './navbarMenu';
import { BrowserRouter } from 'react-router-dom';

describe('<NavbarMenu />', () => {
  test('it should mount', () => {
    render(
      <BrowserRouter>
        <NavbarMenu />
      </BrowserRouter>);

    const navbarMenu = screen.getByTestId('NavbarMenu');

    expect(navbarMenu).toBeInTheDocument();
  });
});
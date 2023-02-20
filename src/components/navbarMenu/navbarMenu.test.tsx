import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarMenu from './navbarMenu';

describe('<NavbarMenu />', () => {
  test('it should mount', () => {
    render(<NavbarMenu />);

    const navbarMenu = screen.getByTestId('NavbarMenu');

    expect(navbarMenu).toBeInTheDocument();
  });
});
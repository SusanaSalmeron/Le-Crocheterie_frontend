import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('it should mount', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const header = screen.getByTestId('Header');
    expect(header).toBeInTheDocument();
    const menu = screen.getByTestId('NavbarMenu')
    expect(menu).toBeInTheDocument()
    const searchBar = screen.getByTestId("SearchBar")
    expect(searchBar).toBeInTheDocument()
    const logo = screen.getByRole('img')
    expect(logo).toHaveAttribute('src', 'logo.png')

  });
});
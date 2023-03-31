import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './home';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
  test('should show correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>);

    const home = screen.getByTestId('home');
    expect(home).toBeInTheDocument();
    const carousel = screen.getByTestId('Carousel')
    expect(carousel).toBeInTheDocument()
    const sections = screen.getAllByRole('heading')
    expect(sections).toHaveLength(7)
    const sectionTypes = screen.getByTestId('sectionTypes')
    expect(sectionTypes).toBeInTheDocument()

  });
});
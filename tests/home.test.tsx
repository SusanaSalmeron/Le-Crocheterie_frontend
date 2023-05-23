import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => jest.fn()
}))

describe('<Home />', () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { }
    };
  };
  test('should show correctly', () => {
    render(
      <Home />
    );

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
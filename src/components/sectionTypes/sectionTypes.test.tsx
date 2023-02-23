import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionTypes from './sectionTypes';

describe('<SectionTypes />', () => {
  test('it should mount', () => {
    render(<SectionTypes />);

    const sectionTypes = screen.getByTestId('sectionTypes');
    expect(sectionTypes).toBeInTheDocument();
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent('Category products')
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
    expect(images[0]).toHaveAttribute('src', 'cat1.png')
    expect(images[1]).toHaveAttribute('src', 'cat2.png')
    expect(images[2]).toHaveAttribute('src', 'cat3.png')
    expect(images[3]).toHaveAttribute('src', 'cat4.png')
    expect(images[4]).toHaveAttribute('src', 'cat5.png')
  });
});
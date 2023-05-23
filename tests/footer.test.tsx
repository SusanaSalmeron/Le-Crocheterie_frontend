
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

describe('<Footer />', () => {
  test('it should mount', () => {
    render(<Footer />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument()
    const footerTag = screen.getByRole('contentinfo');
    expect(footerTag).toHaveTextContent('Le Crocheterie')

  });
});
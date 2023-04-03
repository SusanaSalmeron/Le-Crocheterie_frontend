import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './contactForm';

describe('<OrderForm />', () => {
  test('it should mount', () => {
    render(<ContactForm />);

    const contactForm = screen.getByTestId('contactForm');

    expect(contactForm).toBeInTheDocument();
  });
});
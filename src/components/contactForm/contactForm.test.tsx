import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './contactForm';
import userEvent from '@testing-library/user-event';

describe('<ContactForm />', () => {
  afterEach(jest.clearAllMocks)
  const contactService = require('../../services/contactService')
  test('it should render the form', () => {
    render(<ContactForm />);

    const contactForm = screen.getByTestId('contactForm');
    expect(contactForm).toBeInTheDocument();
    const textbox = screen.getAllByRole('textbox')
    expect(textbox).toHaveLength(3)
    expect(textbox[0]).toHaveProperty("placeholder", "Write your name")
    expect(textbox[1]).toHaveProperty("placeholder", "Write your email")
    expect(textbox[2]).toHaveProperty("placeholder", "Write your order/question")
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    expect(select).toContainHTML("<select name='topic'><option>Choose subject</option><option>Order</option><option>Support</option><option>General</option></select>")
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  });

  test('it should write with values', async () => {
    jest.spyOn(contactService, "sendContactForm").mockResolvedValue(true)

    const user = userEvent.setup()
    render(<ContactForm />);
    const textbox = screen.getAllByRole('textbox')
    const name = textbox[0]
    /* await waitFor(() => {
      user.type(name, "Susana")
      expect(name).toHaveValue("Susana")
    }) */


  })
});
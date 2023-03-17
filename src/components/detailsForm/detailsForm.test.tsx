import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsForm from './detailsForm';

describe('<DetailsForm />', () => {
  test('it should mount', () => {
    render(<DetailsForm />);

    const detailsForm = screen.getByTestId('detailsForm');

    expect(detailsForm).toBeInTheDocument();
  });
});
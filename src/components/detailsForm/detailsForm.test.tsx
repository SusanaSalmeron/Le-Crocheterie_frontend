import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsForm from './detailsForm';

describe('<DetailsForm />', () => {
  test('sould show form correctly', () => {
    render(<DetailsForm id={5} material="cotton" colors={"pink/blue"} />);
    const detailsForm = screen.getByTestId('detailsForm');
    expect(detailsForm).toBeInTheDocument();
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(2)
    expect(selects[0]).toContainHTML("<select name='color'><option >Choose color</option><option value='pink'>Pink</option><option value='blue'>Blue</option><option value='green'>Green</option></select>")
    expect(selects[1]).toContainHTML("<select name='size'><option >Choose size</option><option value='s'>S</option><option value='m'>M</option><option value='l'>L</option></select>")
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toContainHTML("<input name='toggle' type='checkbox' value='false' />")
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  });
});
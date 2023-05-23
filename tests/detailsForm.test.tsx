import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsForm from '../pages/(detailsForm)';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => jest.fn()
}))

describe('<DetailsForm />', () => {
  afterEach(jest.clearAllMocks)

  test('sould show form correctly', async () => {
    render(
      <DetailsForm id={5} colors={["pink", "blue"]} catalogs={{ "colors": ["pink", "blue"], "materials": ["cotton"], "sizes": { "l": 25, "m": 15, "s": 10 } }} />
    )

    const detailsForm = screen.getByTestId('detailsForm');
    expect(detailsForm).toBeInTheDocument();
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(2)

    await waitFor(() => {
      expect(selects[0]).toContainHTML("<select name='color'><option >Choose color</option><option value='pink'>PINK</option><option value='blue'>BLUE</option></select>")
    })
    await waitFor(() => {
      expect(selects[1]).toContainHTML("<select name='size'><option >Choose size</option><option value='s'>S</option><option value='m'>M</option><option value='l'>L</option></select>")
    })
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toContainHTML("<input name='toggle' type='checkbox' value='false' />")
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  });
});
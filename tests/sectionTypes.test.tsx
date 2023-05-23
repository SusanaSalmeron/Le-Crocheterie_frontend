import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import SectionTypes from '../components/SectionTypes';




describe('<SectionTypes />', () => {
  test('it should show all categories selector images', async () => {

    const mockedOnClick = jest.fn()

    render(
      <SectionTypes onCategory={mockedOnClick} />
    )
    const sectionTypes = screen.getByTestId('sectionTypes');
    expect(sectionTypes).toBeInTheDocument();
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent('Category products')
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', '/_next/image?url=%2Fcat1&w=128&q=75')
    expect(images[1]).toHaveAttribute('src', '/_next/image?url=%2Fcat2&w=128&q=75')
    expect(images[2]).toHaveAttribute('src', '/_next/image?url=%2Fcat3&w=128&q=75')
    expect(images[3]).toHaveAttribute('src', '/_next/image?url=%2Fcat4&w=128&q=75')
    expect(images[4]).toHaveAttribute('src', '/_next/image?url=%2Fcat5&w=128&q=75')
    expect(images[5]).toHaveAttribute('src', '/_next/image?url=%2Fcat6&w=128&q=75')
  });

  test('should call onClick when user click the button', async () => {
    const user = userEvent.setup()
    const mockedOnClick = jest.fn()

    render(
      <SectionTypes onCategory={mockedOnClick} />
    )
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(6)
    await user.click(buttons[0])
    expect(mockedOnClick).toHaveBeenCalled()
    await user.click(buttons[1])
    expect(mockedOnClick).toHaveBeenCalled()
    await user.click(buttons[2])
    expect(mockedOnClick).toHaveBeenCalled()
    await user.click(buttons[3])
    expect(mockedOnClick).toHaveBeenCalled()
    await user.click(buttons[4])
    expect(mockedOnClick).toHaveBeenCalled()
    await user.click(buttons[5])
  })
});
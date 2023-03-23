import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionTypes from './sectionTypes';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}))


describe('<SectionTypes />', () => {
  test('it should show all categories selector images', async () => {

    const mockedOnClick = jest.fn()

    render(
      <BrowserRouter>
        <SectionTypes onCategory={mockedOnClick} />
      </BrowserRouter>);

    const sectionTypes = screen.getByTestId('sectionTypes');
    expect(sectionTypes).toBeInTheDocument();
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent('Category products')
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', 'cat1.png')
    expect(images[1]).toHaveAttribute('src', 'cat2.png')
    expect(images[2]).toHaveAttribute('src', 'cat3.png')
    expect(images[3]).toHaveAttribute('src', 'cat4.png')
    expect(images[4]).toHaveAttribute('src', 'cat5.png')
    expect(images[5]).toHaveAttribute('src', 'cat6.png')
  });

  test('should call onClick when user click the button', async () => {

    const user = userEvent.setup()
    const mockedOnClick = jest.fn()

    render(
      <BrowserRouter>
        <SectionTypes onCategory={mockedOnClick} />
      </BrowserRouter>);

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
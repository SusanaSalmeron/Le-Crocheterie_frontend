import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "../app/contact/page";
import userEvent from "@testing-library/user-event";

describe("<ContactForm />", () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { }
    };
  };
  const contactService = require("../lib/contact")
  afterEach(jest.clearAllMocks)
  test("it should render the form", () => {
    render(
      <ContactForm />);

    const contactForm = screen.getByTestId("contactForm");
    expect(contactForm).toBeInTheDocument();
    const textbox = screen.getAllByRole("textbox")
    expect(textbox).toHaveLength(4)
    expect(textbox[0]).toHaveProperty("placeholder", "Search")
    expect(textbox[1]).toHaveProperty("placeholder", "Write your name")
    expect(textbox[2]).toHaveProperty("placeholder", "Write your email")
    expect(textbox[3]).toHaveProperty("placeholder", "Write your order/question")
    const select = screen.getByRole("combobox")
    expect(select).toBeInTheDocument()
    expect(select).toContainHTML("<select name='topic'><option>Choose subject</option><option value='order'>Order</option><option value='support'>Support</option><option value='general'>General</option></select>")
    const button = screen.getAllByRole("button")
    expect(button).toHaveLength(2)
    expect(button[1]).toBeDisabled()
  });

  test("it should write with values", async () => {
    jest.spyOn(contactService, "sendContactForm").mockResolvedValue(true)
    const user = userEvent.setup()
    render(<ContactForm />);
    const textbox = screen.getAllByRole("textbox")
    const name = textbox[1]
    const email = textbox[2]
    const box = textbox[3]
    await waitFor(async () => {
      await user.type(name, "Susana")
      expect(name).toHaveValue("Susana")
    })
    await waitFor(async () => {
      await user.type(email, "exdream76@gmail.com")
      expect(email).toHaveValue("exdream76@gmail.com")
    })
    await waitFor(async () => {
      await user.type(box, "dsjfjgorgoiffdsjgfdskgjsflkgjflgjfgjffrgrhtfgerhtjf")
      expect(box).toHaveValue("dsjfjgorgoiffdsjgfdskgjsflkgjflgjfgjffrgrhtfgerhtjf")
    })
  })
});
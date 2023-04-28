import { render, fireEvent, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"

describe("BookingForm", () => {
  test("disables submit button when form fields are invalid", () => {
    render(<BookingForm />)
    const submitButton = screen.getByText("Book Now")

    // Initially, submit button should be disabled
    expect(submitButton).toBeDisabled()

    // Fill in form fields with invalid values
    const dateInput = screen.getByLabelText("Choose date")
    fireEvent.change(dateInput, { target: { value: "invalid-date" } })
    const guestsInput = screen.getByLabelText("Number of guests")
    fireEvent.change(guestsInput, { target: { value: "0" } })

    // Submit button should still be disabled due to invalid form fields
    expect(submitButton).toBeDisabled()
  })

  test("enables submit button when form fields are valid", () => {
    render(<BookingForm />)
    const submitButton = screen.getByText("Book Now")

    // Initially, submit button should be disabled
    expect(submitButton).toBeDisabled()

    // Fill in form fields with valid values
    const dateInput = screen.getByLabelText("Choose date")
    fireEvent.change(dateInput, { target: { value: "2023-05-01" } })
    const guestsInput = screen.getByLabelText("Number of guests")
    fireEvent.change(guestsInput, { target: { value: "2" } })

    // Submit button should be enabled due to valid form fields
    expect(submitButton).toBeEnabled()
  })

  test("calls handleFormSubmit when form is submitted with valid fields", () => {
    const handleFormSubmit = jest.fn()
    render(<BookingForm dispatch={handleFormSubmit} />)
    const submitButton = screen.getByText("Book Now")

    // Fill in form fields with valid values
    const dateInput = screen.getByLabelText("Choose date")
    fireEvent.change(dateInput, { target: { value: "2023-05-01" } })
    const guestsInput = screen.getByLabelText("Number of guests")
    fireEvent.change(guestsInput, { target: { value: "2" } })

    // Submit form
    fireEvent.submit(submitButton)

    // handleFormSubmit should have been called once
    expect(handleFormSubmit).toHaveBeenCalledTimes(1)
  })
})

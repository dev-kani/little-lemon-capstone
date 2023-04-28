import { useState } from "react"
import PropTypes from "prop-types"

const BookingForm = ({ availableTimes, date, dispatch }) => {
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("")
  const [occasion, setOccasion] = useState("")

  const handleDateChange = (e) => {
    dispatch({ type: "SET_DATE", payload: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // handle form submission
  }

  const isFormValid = () => {
    return time && guests && occasion
  }

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select time</option>
        {availableTimes?.map((t, index) => (
          <option key={index}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid()}>
        Book Now
      </button>
    </form>
  )
}

BookingForm.propTypes = {
  // availableTimes: PropTypes.array.isRequired,
  // date: PropTypes.string.isRequired,
  // dispatch: PropTypes.func.isRequired,
  availableTimes: PropTypes.array,
  date: PropTypes.string,
  dispatch: PropTypes.func,
}

export default BookingForm
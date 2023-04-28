import { useReducer, useEffect } from "react"
import BookingForm from "./Booking/BookingForm"

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate())

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00')
    }
    if (random() < 0.5) {
      result.push(i + ':30')
    }
  }
  return result
}

const initializeTimes = {
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  date: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, date: action.payload }
    case "SET_AVAILABLE_TIMES":
      return { ...state, availableTimes: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initializeTimes)

  useEffect(() => {
    if (state.date) {
      const availableTimes = fetchAPI(new Date(state.date))
      dispatch({ type: "SET_AVAILABLE_TIMES", payload: availableTimes })
    }
  }, [state.date]);

  return (
    <BookingForm
      availableTimes={state.availableTimes}
      date={state.date}
      dispatch={dispatch}
    />
  )
}

export default Main

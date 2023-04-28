import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BookingPage from './components/Booking/BookingPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "booking",
    element: <BookingPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="main__nav">
      <ul>
        <li><Link to="/home">Homepage</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/booking">Table Booking</Link></li>
      </ul>
    </nav>
  )
}
export default Nav
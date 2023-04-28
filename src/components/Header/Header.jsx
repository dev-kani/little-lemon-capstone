import Nav from "./Nav"
import lemon from '../../assets/images/lemon.svg'
import Container from "../Container"


const Logo = () => {
  return (
    <div className="main__logo">
      <img src={lemon} alt="Little Lemon" />
      <h1>Little Lemon</h1>
    </div>
  )
}

const Header = () => {
  return (
    <header className="main___header">
      <Container>
        <Logo />
        <Nav />
      </Container>
    </header>
  )
}
export default Header
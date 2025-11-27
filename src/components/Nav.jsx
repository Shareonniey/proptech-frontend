import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/add">Add Property</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  )
}

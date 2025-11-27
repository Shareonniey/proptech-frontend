import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx"
import Home from "./components/Home.jsx"
import PropertyDetails from "./components/PropertyDetails.jsx"
import AddPropertyForm from "./components/AddPropertyForm.jsx"
import About from "./components/About.jsx"

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/add" element={<AddPropertyForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

import { useParams } from "react-router-dom"

export default function PropertyDetails() {
  const { id } = useParams()
  return <h1>Property Details Page - Property ID: {id}</h1>
}

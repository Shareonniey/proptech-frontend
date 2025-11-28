// import { useParams } from "react-router-dom"
// import PropertyCard from "../components/PropertyCard";

// export default function PropertyDetails({houses, loading }) {
  
//   // get ide from clicked link
//   const { id } = useParams()

//   //only show data related to the id
//   const property = houses.find(h => Number(h.id) === Number(id));
   

//   return <>
//   <h1>{property.title}</h1>
//   <p>{property.city}</p>
//   <p>{property.estate}</p>
//   <p>{property.description}</p>
//   <PropertyCard house={property}/>
  
//   </> 
// }
import { useParams } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";

export default function PropertyDetails({ houses, loading }) {
  const { id } = useParams();

  // Show loading while data is fetching
  if (loading) {
    return <p>Loading...</p>;
  }

  // Find the selected house
  const property = houses.find((h) => Number(h.id) === Number(id));

  // If property not found, avoid crashing
  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <>
      <h1>{property.title}</h1>
      <p>City: {property.city}</p>
      <p>Estate: {property.estate}</p>
      <p>Description: {property.description}</p>

      {/* Show the card again for a visual preview */}
      <PropertyCard house={property} />
    </>
  );
}

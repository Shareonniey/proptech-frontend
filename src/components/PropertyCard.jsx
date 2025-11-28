export default function PropertyCard({ house }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        color: "blue"
      }}
    >
      <h3>{house.title}</h3>
      <p>City: {house.city}</p>
      <p>Estate: {house.estate}</p>
      <p>Rent: KES {house.price}</p>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
      <p>Parking: {house.parking}</p>
    </div>
  );
}

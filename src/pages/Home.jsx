import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/properties")
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <PropertyCard house={house} />
            <Link to={`/houses/${house.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


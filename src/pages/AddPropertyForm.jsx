export default function AddPropertyForm() {
  return (
  <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h1>Add New Property (Dummy Form)</h1>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" placeholder="Property title" />
        </div>

        <div>
          <label>Property Type:</label>
          <select>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>

        <div>
          <label>House Type:</label>
          <input type="text" placeholder="Apartment, House, Villa..." />
        </div>

        <div>
          <label>City:</label>
          <input type="text" placeholder="City" />
        </div>

        <div>
          <label>Estate:</label>
          <input type="text" placeholder="Estate" />
        </div>

        <div>
          <label>Price:</label>
          <input type="number" placeholder="Price in KES" />
        </div>

        <div>
          <label>Bedrooms:</label>
          <input type="number" placeholder="Number of bedrooms" />
        </div>

        <div>
          <label>Bathrooms:</label>
          <input type="number" placeholder="Number of bathrooms" />
        </div>

        <div>
          <label>Parking:</label>
          <input type="number" placeholder="Number of parking spots" />
        </div>

        <div>
          <label>Main Image URL:</label>
          <input type="text" placeholder="https://example.com/image.jpg" />
        </div>

        <div>
          <label>Additional Images (comma separated URLs):</label>
          <input type="text" placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg" />
        </div>

        <div>
          <label>Description:</label>
          <textarea placeholder="Property description"></textarea>
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>Add Property</button>
      </form>
    </div>
  )
}

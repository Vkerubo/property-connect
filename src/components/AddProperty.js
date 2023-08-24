import React, { useState } from "react";

export const AddProperty = ({ id }) => {
  console.log(id);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        address,
        price,
        bedrooms,
        bathrooms,
        image,
        seller_id: id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Property not created");
        }
      })
      .then((user) => {
        console.log(user);
        alert("Property added");
        setError("");
        setTitle("");
        setAddress("");
        setPrice("");
        setBedrooms("");
        setBathrooms("");
        setImage("");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add Property</h2>
      {error && <h2 style={styles.error}>{error}</h2>}
      <div className="form-group">
        <label htmlFor="title" style={styles.label}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address" style={styles.label}>
          Address:
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" style={styles.label}>
          Price:
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bedrooms" style={styles.label}>
          Bedrooms:
        </label>
        <input
          type="number"
          id="bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          style={styles.input}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bathrooms" style={styles.label}>
          Bathrooms:
        </label>
        <input
          type="number"
          id="bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          style={styles.input}
        />
      </div>
      <div className="form-group">
        <label htmlFor="images" style={styles.label}>
          Images:
        </label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>
        Add Property
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "40px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  label: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    width: "100%",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

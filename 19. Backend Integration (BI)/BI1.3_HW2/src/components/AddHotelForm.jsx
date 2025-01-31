import { useState } from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: 0,
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const onChangeHandler = (e) => {
    const { name, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "reservationsNeeded" ||
        name === "isParkingAvailable" ||
        name === "isWifiAvailable" ||
        name === "isPoolAvailable" ||
        name === "isSpaAvailable" ||
        name === "isRestaurantAvailable"
          ? checked
          : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to Fetch: ${errorMessage}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Hotel</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          type="text"
          name="name"
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="category">Category:</label>
        <br />
        <select
          id="category"
          type="text"
          name="category"
          onChange={onChangeHandler}>
          <option value="">Select</option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="location">Location:</label>
        <br />
        <input
          id="location"
          type="text"
          name="location"
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          id="rating"
          type="number"
          name="rating"
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="webSite">WebSite:</label>
        <br />
        <input
          id="webSite"
          type="text"
          name="webSite"
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <br />
        <input
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="checkInTime">Check In Time:</label>
        <br />
        <input
          id="checkInTime"
          type="text"
          name="checkInTime"
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="checkOutTime">Check Out Time:</label>
        <br />
        <input
          id="checkOutTime"
          type="text"
          name="checkOutTime"
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="amenities">Amenities:</label>
        <br />
        <input
          id="amenities"
          type="text"
          name="amenities"
          onChange={onChangeHandler}></input>
        <br />
        <br />

        <label htmlFor="priceRange">Price Range:</label>
        <br />
        <select
          id="priceRange"
          type="text"
          name="priceRange"
          onChange={onChangeHandler}>
          <option value="">Select</option>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <input
          id="reservationsNeeded"
          type="checkbox"
          name="reservationsNeeded"
          onChange={onChangeHandler}></input>
        <label htmlFor="reservationsNeeded">Reservations Needed</label>
        <br />
        <br />
        <input
          id="isParkingAvailable"
          type="checkbox"
          name="isParkingAvailable"
          onChange={onChangeHandler}></input>
        <label htmlFor="isParkingAvailable">Is Parking Available</label>
        <br />
        <br />

        <input
          id="isWifiAvailable"
          type="checkbox"
          name="isWifiAvailable"
          onChange={onChangeHandler}></input>
        <label htmlFor="isWifiAvailable">Is Wifi Available</label>
        <br />
        <br />
        <input
          id="isPoolAvailable"
          type="checkbox"
          name="isPoolAvailable"
          onChange={onChangeHandler}></input>
        <label htmlFor="isPoolAvailable">Is Pool Available</label>
        <br />
        <br />
        <input
          id="isSpaAvailable"
          type="checkbox"
          name="isSpaAvailable"
          onChange={onChangeHandler}></input>
        <label htmlFor="isSpaAvailable">Is Spa Available</label>
        <br />
        <br />
        <input
          id="isRestaurantAvailable"
          type="checkbox"
          name="isRestaurantAvailable"
          onChange={onChangeHandler}></input>
        <label htmlFor="isRestaurantAvailable">Is Restaurant Available</label>
        <br />
        <br />
        <label htmlFor="photo">Photo:</label>
        <br />
        <input
          id="photo"
          type="text"
          name="photo"
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotelForm;

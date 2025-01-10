const express = require("express");

const app = express();

const { initializeDatabase } = require("./db/db.connect");
const Hotels = require("./models/hotels.models");

app.use(express.json());

initializeDatabase();

const readAllHotels = async () => {
    try {
      const allHotels = await Hotels.find();
      return allHotels;
    } catch (error) {
      throw error;
    }
  };
  
  app.get("/hotels", async (req, res) => {
    try {
      const hotels = await readAllHotels();
      if (hotels) {
        res.json(hotels);
      } else {
        res.status(404).json({ error: "Hotel not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get hotels" });
    }
  });
  
  const readHotelByName = async (hotelName) => {
    try {
      const hotelByName = await Hotels.findOne({ name: hotelName });
      return hotelByName;
    } catch (error) {
      throw error;
    }
  };
  
  app.get("/hotels/:hotelName", async (req, res) => {
    try {
      console.log(req);
      const hotels = await readHotelByName(req.params.hotelName);
      if (hotels) {
        res.json(hotels);
      } else {
        res.status(404).json({ error: "Hotel not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get data" });
    }
  });
  
  const readHotelByPhoneNumber = async (number) => {
    try {
      const hotelByNumber = await Hotels.findOne({ phoneNumber: number });
      return hotelByNumber;
    } catch (error) {
      throw error;
    }
  };
  
  app.get("/hotels/directory/:phoneNumber", async (req, res) => {
    try {
      const hotel = await readHotelByPhoneNumber(req.params.phoneNumber);
      if (hotel) {
        res.json(hotel);
      } else {
        res.status(404).json({ error: "Hotel not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get hotel" });
    }
  });
  
  const readHotelsByRating = async (rating) => {
    try {
      const hotelByRating = await Hotels.findOne({ rating: rating });
      return hotelByRating;
    } catch (error) {
      throw error;
    }
  };
  
  app.get("/hotels/rating/:hotelRating", async (req, res) => {
    try {
      const hotel = await readHotelsByRating(req.params.hotelRating);
      if (hotel) {
        res.json(hotel);
      } else {
        res.status(404).json({ error: "Hotel not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get hotel" });
    }
  });
  
  const allHotelsByCategory = async (category) => {
    try {
      const allHotelsByCategory = await Hotels.find({ category: category });
      return allHotelsByCategory;
    } catch (error) {
      throw error;
    }
  };
  
  app.get("/hotels/category/:hotelCategory", async (req, res) => {
    try {
      const hotels = await allHotelsByCategory(req.params.hotelCategory);
      if (hotels) {
        res.json(hotels);
      } else {
        res.status(404).json({ error: "Hotels not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get hotels" });
    }
  });
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

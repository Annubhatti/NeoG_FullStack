const express = require("express");

const app = express();

const { initializeDatabase } = require("./db/db.connect");
const Restaurants = require("./models/restaurants.models");

app.use(express.json());

initializeDatabase();


async function createRestaurant(newRes) {
  try {
    const restaurant = new Restaurants(newRes)
    const saveRes = await restaurant.save();
    return saveRes;
  } catch (error) {
    throw error
  }
}

app.post("/restaurants", async (req, res) =>{
  try {
    const savedRes = await createRestaurant(req.body)
    res.status(201).json({ message: "Restaurant added successfully.", restaurant: savedRes })
  } catch (error) {
    res.json(500).json({ error: "Failed to add restaurant" })
  }
})

async function readAllRestaurants() {
  try {
    const allRestaurants = await Restaurants.find();
    return allRestaurants;
  } catch (error) {
    console.log(error);
  }
}

app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await readAllRestaurants();
    if (restaurants.length != 0) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "No restaurants found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants." });
  }
});

async function readRestaurantsByName() {
  try {
    const restaurant = await Restaurants.findOne({ name: restaurantName });
    return restaurant;
  } catch (error) {
    throw error;
  }
}

app.get("/restaurants/:restaurantName", async (req, res) => {
  try {
    const restaurants = await readRestaurantsByName(req.params.restaurantName);
    if (restaurants) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "Restaurant not Found" });
    }
  } catch (error) {
    res.status(5000).json({ error: "Failed to get restaurants" });
  }
});

const readRestaurantsByNumber = async (number) => {
    try {
      const restaurantsByNumber = await Restaurants.findOne({
        phoneNumber: number,
      });
      return restaurantsByNumber;
    } catch (error) {
      throw error;
    }
  };
  
  app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
    try {
      const restaurant = await readRestaurantsByNumber(req.params.phoneNumber);
      if (restaurant) {
        res.json(restaurant);
      } else {
        res.status(404).json({ error: "Restaurant not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get Restaurants" });
    }
  });
  
  const readRestaurantsByCuisine = async (name) => {
    try {
      const restaurantsByCuisine = await Restaurants.find({ cuisine: name });
      return restaurantsByCuisine;
    } catch (error) {
      throw error;
    }
  };
  
  app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
    try {
      const restaurants = await readRestaurantsByCuisine(req.params.cuisineName);
      if (restaurants) {
        res.json(restaurants);
      } else {
        res.status(404).json({ error: "Restaurants not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get restaurant" });
    }
  });
  
  const readRestaurantByLocation = async (location) => {
    try {
      const restaurant = await Restaurants.find({ location: location });
      return restaurant;
    } catch (error) {
      throw error;
    }
  };
  
  app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
    try {
      const restaurants = await readRestaurantByLocation(
        req.params.restaurantLocation
      );
      if (restaurants) {
        res.json(restaurants);
      } else {
        res.status(404).json({ error: "Restaurant not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get restaurants" });
    }
  });

  async function deleteRestaurant(restaurantId) {
    try {
      const deleteRes = await Restaurants.findByIdAndDelete(restaurantId)
      return deleteRes;
    } catch (error) {
      throw error;
    }
    
  }

  app.delete("/restaurants/:restaurantId", async(req, res) =>{
    try {
      const deletedRes = await deleteRestaurant(req.params.restaurantId)
      res.status(201).json({ message: "deleted", res: deletedRes });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete" });
    }
  })

  async function updateRestaurantData(resId, dataToUpdate) {
    try{
      const updatedRes = await Restaurants.findByIdAndUpdate(resId, dataToUpdate, {
        new: true,
      });
      return updatedRes;
    }
    catch(error){
      throw error;
    }
  }

  app.post("/restaurants/:restaurantId", async(req, res) =>{
    try{
      const updatedRes = await updateRestaurantData(req.params.resId, req.body);
      if(updatedRes) {
        res.status(200).json({ message: "Updated", res: updatedRes});
      }else{
        res.status(404).json({ error: "Restaurant not Found."})
      }
    }catch(error){
      res.status(500).json({ error: "Failed to update data" });
    }

  });
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

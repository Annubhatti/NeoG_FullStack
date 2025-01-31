import React from "react";
import Hotels from "./components/Hotels";
import HotelsByTitle from "./components/HotelsByTitle";
import AddHotelForm from "./components/AddHotelForm";

const App = () => {
  return (
    <div>
      <AddHotelForm />
      <Hotels />
      <HotelsByTitle name="New Hotel 1" />
    </div>
  );
};

export default App;

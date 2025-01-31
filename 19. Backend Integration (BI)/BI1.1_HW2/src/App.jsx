import React from "react";
import Hotels from "./components/Hotels";
import HotelsByTitle from "./components/HotelsByTitle";

const App = () => {
  return (
    <div>
      <Hotels />
      <HotelsByTitle name="New Hotel 1" />
    </div>
  );
};

export default App;

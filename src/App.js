import React from "react";
import NavBar from "./Home/NavBar";
import Banner from "./Home/Banner";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <NavBar />;
      <div className="max-w-screen-xl mx-auto">
        <Banner />
      </div>
    </div>
  );
}

export default App;

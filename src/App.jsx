import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";

const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-primary h-full">
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;

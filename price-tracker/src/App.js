import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/PriceTrackerThemeButton.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeProvider";
import { ProductInfoProvider } from "./contexts/ProductInfoProvider";

import React, { useState } from "react";
import { useTheme } from "./contexts/ThemeProvider";
import PriceTracker from "./components/PriceTracker";
import PriceTrackerCommunity from "./pages/PriceTrackerCommunity";
import PriceTrackerHelp from "./pages/PriceTrackerHelp";
import PriceTrackerNavBar from "./components/PriceTrackerNavBar";
import PriceTrackerTheme from "./components/PriceTrackerTheme";

function App() {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider>
          <ProductInfoProvider>
            <PriceTrackerNavBar></PriceTrackerNavBar>
            <Routes>
              <Route path="/" element={<PriceTracker />}></Route>
              <Route
                path="/community"
                element={<PriceTrackerCommunity />}
              ></Route>
              <Route path="/help" element={<PriceTrackerHelp />}></Route>
            </Routes>
          </ProductInfoProvider>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import ReactTooltip from "react-tooltip";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Line,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Bottom Settings  */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <button
              data-tip="Settings"
              type="button"
              className="text-3xl p-3 text-white hover:drop-shadow-xl hover:bg-light-gray"
              style={{ background: "var(--blue-color)", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
            <ReactTooltip place="top" type="dark" effect="solid" />
          </div>
          {/* /Bottom Settings  */}

          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          {/* /*Sidebar */}

          {/* Navbar */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md-static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          {/* /Navbar */}

          {/* Routing */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
          {/* /Routing */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

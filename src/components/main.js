import React from "react";
import { Routes, Route } from "react-router-dom";
import A from "../pages/A";
import B from "../pages/B";
import C from "../pages/C";
import D from "../pages/D";
import E from "../pages/E";

function Main() {
  return (
    <main className="flex-1 p-4 ml-64 mt-24">
      {" "}
      {/* Adjusted margin-top to account for header height */}
      <Routes>
        <Route path="/menu-a" element={<A />} />
        <Route path="/menu-b" element={<B />} />
        <Route path="/menu-c" element={<C />} />
        <Route path="/menu-d" element={<D />} />
        <Route path="/menu-e" element={<E />} />
      </Routes>
    </main>
  );
}

export default Main;

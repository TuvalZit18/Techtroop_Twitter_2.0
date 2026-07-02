// AppRoutes.jsx
import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

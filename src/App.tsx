import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Connect from "./pages/Connect";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

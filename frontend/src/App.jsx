import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AddMarks from "./pages/AddMarks";
import AddAttendance from "./pages/AddAttendance";
import Performance from "./pages/Performance";
import CareerGuidance from "./pages/CareerGuidance";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
<Routes>

    <Route path="/" element={<Home />} />

    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />

    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/marks" element={<AddMarks />} />

    <Route path="/attendance" element={<AddAttendance />} />

    <Route path="/performance" element={<Performance />} />

    <Route path="/career" element={<CareerGuidance />} />
    <Route
    path="/forgot-password"
    element={<ForgotPassword />}
/>

</Routes>
    </BrowserRouter>
  );
}

export default App;
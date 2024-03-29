import {
    Route, Routes,
  } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:user" element={<Profile />} />
        </Routes>
    )
}

export default MainRoutes;
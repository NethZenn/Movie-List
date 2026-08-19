import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.jsx";
import NavBar from "./components/NavBar.jsx";
import "./css/App.css";
export default function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/Movie-List-Project" element={<Home />} />
            <Route path="Movie-List-Project/favorite" element={<Favorite />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

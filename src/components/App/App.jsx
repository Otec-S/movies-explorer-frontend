import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main";
import Register from "../Register";
import Login from "../Login";
import Profile from "../Profile";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import Page404 from "../Page404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

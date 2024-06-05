import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import CrossWordMaker from "./pages/CrossWordMaker";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import WordSearchMaker from "./pages/WordSearchMaker";
import NavBar from "./components/NavBar";
import PuzzlesPage from "./pages/PuzzlesPage";
import Footer from "./components/Footer";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookCovers from "./pages/BookCovers";
import ChatGPT from "./pages/ChatGPT";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div>
    <BrowserRouter>
      <div>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/bookcovers" element={<BookCovers />} />
        <Route path="/chatgpt" element={<ChatGPT />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/crossword" element={<CrossWordMaker />} />
        <Route path="/wordsearch" element={<WordSearchMaker />} />
        <Route path="/puzzles" element={<PuzzlesPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

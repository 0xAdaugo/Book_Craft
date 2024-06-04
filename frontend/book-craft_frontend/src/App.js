import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpSignIn from "./pages/SignUpSignIn";
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

function App() {
  return (
    <div>
    <BrowserRouter>
      <div>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpSignIn />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
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

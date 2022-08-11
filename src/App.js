import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalStyle from "./assets/css/global";
import HomeScreen from "./pages/Home";
import HashtagPage from "./pages/HashtagPage";

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

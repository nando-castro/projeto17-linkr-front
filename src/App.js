import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalStyle from "./assets/css/global";
import SignUp from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import HomeScreen from "./pages/Home";
import HashtagPage from "./pages/HashtagPage";

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Routes>
        <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
        <Route path="/timeline" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

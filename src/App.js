import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalStyle from "./assets/css/global";
import SignUp from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import HomeScreen from "./pages/Home";
import HashtagPage from "./pages/HashtagPage";
import { UserPage } from "./pages/UserPage";
import Modal from "react-modal";
import { AuthProvider } from "./context/auth";

Modal.setAppElement(".root");

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/timeline" element={<HomeScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Signin />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

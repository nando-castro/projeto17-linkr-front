import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalStyle from "./assets/css/global";
import HomeScreen from "./components/home/Home";
import SignUp from "./components/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalStyle from "./assets/css/global";
import HomeScreen from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

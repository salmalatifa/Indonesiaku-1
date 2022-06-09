import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDestination from "./components/MainDestination";
import Destination from "./pages/Destination";
import Event from "./pages/Event";
import PageArticle from "./pages/PageArticle";
import Staycation from "./pages/Staycation";
import UMKM from "./pages/UMKM";
import "./styles/Header.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Destination />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Staycation" element={<Staycation />} />
        <Route path="/UMKM" element={<UMKM />} />
        <Route path="/PageArticle" exact element={<PageArticle/> }/>
    
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

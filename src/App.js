import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination";
import Event from "./pages/Event";
import Staycation from "./pages/Staycation";
import UMKM from "./pages/UMKM";
import './styles/Header.css';
function App() {
  return (
	<BrowserRouter>
	<Routes>
		<Route path="/"  exact element={<Destination />} />
		<Route path="/Event" element={<Event />} />
		<Route path="/Staycation" element={<Staycation />} />
		<Route path="/UMKM" element={<UMKM />} />
	</Routes>
	</BrowserRouter>
  );
}

export default App;

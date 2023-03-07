import { Navbar } from "./Components/Navbar";
import { AppRouter } from "./Routing/AppRouter";
import { Footer } from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { Hero } from "./Components/Home/Hero";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/contact" element={<Navbar />} />
				<Route path="/product" element={<Navbar />} />
				<Route path="/login" element={<Navbar />} />
				<Route path="/details" element={<Navbar />} />
			</Routes>
			<AppRouter />
			<Footer />
		</>
	);
}

export default App;

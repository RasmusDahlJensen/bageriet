import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Contact } from "../Pages/Contact";
import { Login } from "../Pages/Login";
import { Products } from "../Pages/Products";

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/login" element={<Login />} />
			<Route path="/product" element={<Products />} />
		</Routes>
	);
};

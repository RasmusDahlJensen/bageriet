import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Contact } from "../Pages/Contact";
import { Login } from "../Pages/Login";
import { ProductList, Products } from "../Pages/Products";
import { ProductDetails } from "../Pages/ProductDetails";
import { NotFound } from "../Pages/NotFound";

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/login" element={<Login />} />
			<Route path="/product" element={<Products />}>
				<Route path=":cat_id" element={<ProductList />} />
			</Route>
			<Route path="/details" element={<ProductDetails />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

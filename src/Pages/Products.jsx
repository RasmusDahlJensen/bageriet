import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { PageStyle } from "./Page.Style";
import {
	HeaderProductStyle,
	ProductStyle,
	ProductNavStyle,
} from "./Product.style";

export const Products = () => {
	return (
		<PageStyle>
			<HeaderProductStyle>
				<h2>Produkter</h2>
				<p>
					Det er sød musik for smagsløgene at bage hjemmelavede horn, prøv disse
					lækre morgenhorn.
				</p>
			</HeaderProductStyle>
			<ProductStyle>
				<ProductNavStyle>
					<ProductCategories />
				</ProductNavStyle>
				<Outlet />
			</ProductStyle>
		</PageStyle>
	);
};

const ProductCategories = () => {
	const url = "https://api.mediehuset.net/bakeonline/categories";
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(url).then((data) => {
			setData(data.data.items);
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<nav>
			{data.map((category) => {
				return (
					<div key={category.id}>
						<NavLink to={category.id}>{category.title}</NavLink>
					</div>
				);
			})}
		</nav>
	);
};

export const ProductList = () => {
	const params = useParams();
	// console.log(params.cat_id);
	return <div>Products: {JSON.stringify(params)}</div>;
};

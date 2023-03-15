import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, NavLink, useParams, Link } from "react-router-dom";
import { PageStyle } from "./Page.Style";
import {
	HeaderProductStyle,
	ProductGridStyle,
	ProductNavStyle,
} from "./Product.style";
import {
	CommentStyle,
	ProductContainerStyle,
	ProductStyle,
} from "../Components/Products/NewProducts.style";

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
			<ProductGridStyle>
				<ProductNavStyle>
					<ProductCategories />
				</ProductNavStyle>
				<ProductContainerStyle>
					<Outlet />
				</ProductContainerStyle>
			</ProductGridStyle>
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
	const [id, setId] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	let url = `https://api.mediehuset.net/bakeonline/categories/${params.cat_id}`;
	useEffect(() => {
		axios.get(url).then((data) => {
			// console.log(data.data.item);
			setId(data.data.item);
			setIsLoading(false);
		});
	}, [url]);

	if (isLoading) {
		return <div>Loading products...</div>;
	}
	return (
		<>
			{id.products.map((product) => {
				return (
					<ProductStyle key={product.id}>
						<img src={product.image.fullpath} alt="product" />
						<CommentStyle>
							<p>{product.num_comments}</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								viewBox="0 0 28.286 22"
							>
								<path
									id="Icon_awesome-comments"
									data-name="Icon awesome-comments"
									d="M20.429,10.107c0-4.341-4.572-7.857-10.214-7.857S0,5.766,0,10.107a6.662,6.662,0,0,0,1.866,4.518A11.053,11.053,0,0,1,.108,17.3a.39.39,0,0,0-.074.427.385.385,0,0,0,.358.236,8.647,8.647,0,0,0,4.356-1.228,12.5,12.5,0,0,0,5.466,1.228C15.857,17.964,20.429,14.448,20.429,10.107Zm5.991,10.8a6.653,6.653,0,0,0,1.866-4.518c0-3.285-2.627-6.1-6.35-7.273a7.3,7.3,0,0,1,.064.987c0,5.2-5.289,9.429-11.786,9.429a14.723,14.723,0,0,1-1.557-.093c1.547,2.824,5.181,4.808,9.414,4.808a12.427,12.427,0,0,0,5.466-1.228,8.647,8.647,0,0,0,4.356,1.228.387.387,0,0,0,.358-.236.394.394,0,0,0-.074-.427A10.936,10.936,0,0,1,26.42,20.911Z"
									transform="translate(0 -2.25)"
									fill="#bbc8d4"
								/>
							</svg>
						</CommentStyle>
						<h5>{product.title}</h5>
						<p>{product.teaser}</p>
						<Link to={`/product/details/${product.id}`}>
							<button>SE MERE</button>
						</Link>
					</ProductStyle>
				);
			})}
		</>
	);
};

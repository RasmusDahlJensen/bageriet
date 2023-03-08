import { useLocation } from "react-router-dom";
import { PageStyle, BreadContainerStyle } from "./Page.Style";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProductDetails = () => {
	const { state: { id } = {} } = useLocation();
	console.log(id);
	const url = `https://api.mediehuset.net/bakeonline/products/${id}`;
	const [isLoading, setLoading] = useState(true);
	const [product, getProduct] = useState([]);
	useEffect(() => {
		axios.get(url).then((data) => {
			console.log(data.data);
			getProduct(data.data.item);
			setLoading(false);
		});
	}, [url]);

	if (isLoading) {
		return <div>Currently Loading....</div>;
	}

	return (
		<PageStyle>
			<h5>{product.title}</h5>
			<BreadContainerStyle>
				<div>
					<img src={product.image.fullpath} alt="bread" />
				</div>

				<p>{product.description}</p>
			</BreadContainerStyle>
		</PageStyle>
	);
};

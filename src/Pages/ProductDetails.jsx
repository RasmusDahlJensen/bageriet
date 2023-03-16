import { useLocation, useParams } from "react-router-dom";
import {
	PageStyle,
	BreadContainerStyle,
	IngredientContainerStyle,
	LikeButtonStyle,
	DetailFlexStyle,
	DetailFlexStyleTitle,
} from "./Page.Style";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProductDetails = () => {
	const params = useParams();

	const url = `https://api.mediehuset.net/bakeonline/products/${params.prod_id}`;
	const [isLoading, setLoading] = useState(true);
	const [product, getProduct] = useState([]);
	useEffect(() => {
		axios.get(url).then((data) => {
			// console.log(data.data.item.ingredients);
			getProduct(data.data.item);
			setLoading(false);
		});
	}, [url]);
	const ingredientsArr = [];

	if (isLoading) {
		return <div>Currently Loading....</div>;
	} else {
		for (let i = 0; i < product.ingredients.length; i++) {
			ingredientsArr.push(
				<IngredientContainerStyle key={i}>
					<div>
						{product.ingredients[i].amount}
						{product.ingredients[i].unit_abbr}
					</div>
					<div>{product.ingredients[i].ingredient_title}</div>
				</IngredientContainerStyle>
			);
		}
	}

	return (
		<PageStyle>
			<DetailFlexStyleTitle>
				<h5>{product.title}</h5>
				<DetailFlexStyle>
					<BreadContainerStyle>
						<div>
							<img src={product.image.fullpath} alt="bread" />
						</div>
						<p>{product.description}</p>
					</BreadContainerStyle>
					<div>
						<LikeButtonStyle>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15.105"
								height="14.679"
								viewBox="0 0 15.105 14.679"
							>
								<path
									id="Icon_ionic-ios-heart"
									data-name="Icon ionic-ios-heart"
									d="M13.683,3.938h-.034A3.858,3.858,0,0,0,10.427,5.7,3.858,3.858,0,0,0,7.206,3.938H7.173A4.115,4.115,0,0,0,5.205,4.5a3.7,3.7,0,0,0-1.83,3.267A8.253,8.253,0,0,0,5,12.268,28.4,28.4,0,0,0,10.427,17.5a28.4,28.4,0,0,0,5.432-5.232,8.253,8.253,0,0,0,1.621-4.5A3.833,3.833,0,0,0,13.683,3.938Z"
									transform="translate(-2.875 -3.438)"
									fill="none"
									stroke="#6d8fab"
									stroke-width="1"
								/>
							</svg>
							<div>Like</div>
						</LikeButtonStyle>
						<h5>Ingredienser</h5>
						<div>{ingredientsArr}</div>
					</div>
				</DetailFlexStyle>
				{/* asda */}
			</DetailFlexStyleTitle>
		</PageStyle>
	);
};

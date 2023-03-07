import { NewProductStyle, ProductStyle } from "./NewProducts.style";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "https://api.mediehuset.net/bakeonline/products";

export const NewProducts = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		axios.get(url).then((data) => {
			console.log(data.data.items.slice(0, 6));
			setProduct(data.data.items.slice(0, 6));
		});
	}, []);

	return (
		<NewProductStyle>
			<h2>Nyeste bagværk</h2>
			<div>
				{product.map((product) => {
					return (
						<ProductStyle key={product.id}>
							<img src={product.image.fullpath} alt="product" />
							<div>
								{product.num_comments}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="28.286"
									height="22"
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
							</div>
                            <h5>{product.title}</h5>
                            <p>{product.teaser}</p>
                            <button>SE MERE</button>
						</ProductStyle>
					);
				})}
			</div>
		</NewProductStyle>
	);
};

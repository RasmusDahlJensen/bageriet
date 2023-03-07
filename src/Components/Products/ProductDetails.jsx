import { useLocation } from "react-router-dom";

export const ProductDetails = () => {
	const { state: { id } = {} } = useLocation();
	console.log(id);

	return <div>log</div>;
};

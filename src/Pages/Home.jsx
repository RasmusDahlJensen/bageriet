import { PageStyle } from "./Page.Style";
import { News } from "../Components/Home/News";
import { Form } from "../Components/Home/Form";
import { NewProducts } from "../Components/Products/NewProducts";

export const Home = () => {
	return (
		<PageStyle>
			<News />
			<Form />
			<NewProducts />
		</PageStyle>
	);
};

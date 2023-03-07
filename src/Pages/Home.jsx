import { PageStyle } from "./Page.Style";
import { Hero } from "../Components/Home/Hero";
import { News } from "../Components/Home/News";
import { Form } from "../Components/Home/Form";

export const Home = () => {
	return (
		<PageStyle>
			<News />
			<Form />
		</PageStyle>
	);
};

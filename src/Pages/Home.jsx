import { PageStyle } from "./Page.Style";
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

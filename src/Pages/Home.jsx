import { PageStyle } from "./Page.Style";
import { HomeStyle } from "./Home.style";
import { Hero } from "../Components/Home/Hero";

export const Home = () => {
	return (
		<PageStyle>
			<HomeStyle>
				<nav className="bgimg">
					<Hero />
				</nav>
			</HomeStyle>
		</PageStyle>
	);
};

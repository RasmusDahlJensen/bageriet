import { Article } from "./Article";
import { NewsStyle } from "./News.style";
import articleOne from "../../Assets/images/products/article.jpg";
import articleTwo from "../../Assets/images/products/article2.jpg";
import articleThree from "../../Assets/images/products/article3.jpg";

export const News = (props) => {
	return (
		<NewsStyle>
			<h2>Nyheder</h2>
			<div className="articleFlex">
				<Article
					title="KREATIVITET DYRKES"
					description="Der er mange tilgængelige udgaver af 
Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har"
					img={articleOne}
				/>
				<Article
					title="VI ELSKER BRØD"
					description="Der er mange tilgængelige udgaver af 
Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har"
					img={articleTwo}
				/>
				<Article
					title="SANS FOR DETALJEN"
					description="Der er mange tilgængelige udgaver af 
Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har"
					img={articleThree}
				/>
			</div>
		</NewsStyle>
	);
};

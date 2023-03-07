import { NewsStyle, ArticleStyle, ArticleContainer } from "./News.style";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.mediehuset.net/bakeonline/news";

export const News = (props) => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		axios.get(url).then((data) => {
			// console.log(data.data.items.slice(0, 3));
			setNews(data.data.items.slice(0, 3));
		});
	}, []);

	return (
		<ArticleContainer>
			<h2>Nyheder</h2>
			<NewsStyle>
				{news.map((news) => {
					return (
						<ArticleStyle key={news.id}>
							<img src={news.image} alt="News" />
							<h5>{news.title}</h5>
							<p>{news.teaser}</p>
						</ArticleStyle>
					);
				})}
			</NewsStyle>
		</ArticleContainer>
	);
};

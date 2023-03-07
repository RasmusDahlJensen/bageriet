import { ArticleStyle } from "./Article.Style";

export const Article = (props) => {
	return (
		<ArticleStyle>
			<img src={props.img} alt="" />
			<h5>{props.title}</h5>
			<p>{props.description}</p>
		</ArticleStyle>
	);
};

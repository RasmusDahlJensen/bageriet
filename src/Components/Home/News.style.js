import styled from "styled-components";

export const ArticleContainer = styled.div`
	text-align: center;
	h2 {
		font-size: 3rem;
		font-weight: 200;
	}
`;

export const NewsStyle = styled.div`
	margin: 25px 0 25px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const ArticleStyle = styled.article`
	margin: 0 25px 0 25px;
	max-width: 300px;
	img {
		border-radius: 100%;
		max-width: 300px;
	}
`;

import styled from "styled-components";

export const ProductContainerStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	> div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	h2 {
		font-size: 2.2rem;
		font-weight: 200;
		color: #bbc8d4;
	}
`;

export const ProductStyle = styled.div`
	width: 450px;
	margin: 1%;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		width: 100%;
		width: 400px;
		height: 300px;
	}
	h5 {
		margin: 0;
	}
	button {
		background-color: ${(props) => props.theme.colors.secondary};
		color: ${(props) => props.theme.colors.primary};
		font-weight: 700;
		border: none;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}
`;

export const CommentStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	p {
		color: #bbc8d4;
		font-weight: 900;
		font-size: 1.2rem;
	}
`;

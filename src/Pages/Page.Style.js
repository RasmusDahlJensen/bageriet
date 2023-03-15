import styled from "styled-components";

export const PageStyle = styled.div`
	min-height: 90vh;

	h5 {
		font-size: 1.3rem;
		margin: 10px;
	}
`;

export const BreadContainerStyle = styled.div`
	width: 700px;
	img {
		float: right;
		margin: 5px;
		width: 400px;
		height: 300px;
	}
`;

export const IngredientContainerStyle = styled.div`
	display: flex;
	justify-content: center;
	color: ${(props) => props.theme.colors.primary};
	color: ;
	gap: 5px;
	border: 1px solid #0003;
	width: 170px;
	margin: 1px;
	padding: 5px;
`;

export const LikeButtonStyle = styled.button`
	width: 182px;
	padding: 10px 0 10px 0;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	border: none;
	font-weight: 700;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

export const DetailFlexStyle = styled.div`
	display: flex;
	gap: 15px;
`;

export const DetailFlexStyleTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

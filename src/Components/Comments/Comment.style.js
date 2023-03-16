import styled from "styled-components";

export const CommentStyle = styled.div`
	border: 1px solid #dbdbdb;
	padding: 2%;
	max-width: 600px;
	margin: 15px 0 15px 0;
	display: flex;
	gap: 25px;
	h5 {
		margin: 0;
		font-size: 1.2rem;
	}
	h6 {
		margin: 0;
		font-size: 1.1rem;
		font-style: italic;
		font-weight: 400;
	}

	img {
		width: 150px;
		height: 150px;
	}
`;

export const CommentContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 150px;
	h5 {
		margin: 0;
	}
`;

export const FormStyle = styled.form`
	textarea,
	input {
		box-sizing: border-box;
		width: 350px;
	}
	textarea {
		resize: none;
		height: 100px;
	}
	.title {
		display: flex;
		flex-direction: column;
	}

	button {
		background-color: ${(props) => props.theme.colors.primary};
		border: none;
		color: white;
		padding: 10px 50px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}
`;

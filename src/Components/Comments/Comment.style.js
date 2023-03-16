import styled from "styled-components";

export const CommentStyle = styled.div``;

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

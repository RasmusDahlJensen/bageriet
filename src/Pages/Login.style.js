import styled from "styled-components";

export const LoginStyleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		font-size: 2rem;
	}
`;

export const LoginStyle = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	input {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
	}
	label {
		color: ${(props) => props.theme.colors.primary};
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

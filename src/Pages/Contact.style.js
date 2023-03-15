import styled from "styled-components";

export const ContactContainer = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 1%;
	gap: 50px;
`;

export const ContactStyle = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	textarea {
		width: 500px;
		resize: none;
		box-sizing: border-box;
	}
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
		margin-top: 15px;
		font-size: 1.2rem;
		font-weight: 700;
	}
`;

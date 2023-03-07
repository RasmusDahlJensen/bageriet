import styled from "styled-components";
import FormBg from "../../Assets/images/newsletterbg.jpg";

export const FormContainerStyle = styled.div`
	background-image: url(${FormBg});
	background-position: center;
	background-repeat: no-repeat;
	height: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	p,
	h2 {
		color: white;
		margin: 0;
		padding: 0;
	}
	h2 {
		font-size: 2.2rem;
		font-weight: 200;
		text-shadow: 2px 6px 7px #565656;
	}
	p {
		font-size: 1.2rem;
		text-shadow: 2px 6px 7px #272727;
	}
`;

export const FormStyle = styled.form`
	height: 55px;
	width: 100%;
	display: flex;
	input {
		height: 55px;
		width: 750px;
		box-sizing: border-box;
		@media screen and (max-width: 800px) {
			width: 300px;
		}
	}
	button {
		background-color: ${(props) => props.theme.colors.primary};
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}
	@media screen and (max-width: 850px) {
		display: block;
		button {
			display: block;
		}
		svg {
			display: none;
		}
	}
`;

export const TextStyle = styled.div`
	margin-bottom: 1.5rem;
`;

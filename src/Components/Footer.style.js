import styled from "styled-components";

export const FooterStyle = styled.footer`
	.footerOne {
		background-color: ${(props) => props.theme.colors.tertiary};
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h2,
		p {
			color: white;
		}
		h2 {
			margin: 0;
			margin-bottom: 15px;
			font-family: ${(props) => props.theme.fonts[0]};
			font-size: xx-large;
		}
	}
	.footerTwo {
		background-color: ${(props) => props.theme.colors.quaternary};
		height: 50px;
		display: flex;
		justify-content: center;
		padding: 10px;
	}
	p {
		color: white;
		margin: 0;
		font-weight: 100;
	}
`;

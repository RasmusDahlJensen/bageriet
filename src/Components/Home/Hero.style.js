import styled from "styled-components";

export const HeroStyle = styled.nav`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	height: 100px;
	background-position: center;
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0;
		padding: 0;
		gap: 15px;
	}
	li {
		list-style: none;
	}
	a {
		color: white;
		text-decoration: none;
		font-weight: 300;
		font-size: 1.2rem;
	}
	a:hover {
		text-decoration: underline;
	}
	h1 {
		font-size: 4rem;
		margin: 0 2.5% 0 2.5%;
		font-family: ${(props) => props.theme.fonts[0]};
		color: white;
	}
	.active {
		color: black;
		text-decoration: underline;
	}
`;

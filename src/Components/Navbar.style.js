import styled from "styled-components";

export const NavbarStyle = styled.nav`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary};
	height: 100px;
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
		color: black;
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
	}
	.active {
		color: white;
		text-decoration: underline;
	}
`;

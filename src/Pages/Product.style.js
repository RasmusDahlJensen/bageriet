import styled from "styled-components";

export const HeaderProductStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
	margin-bottom: 25px;
	h2 {
		font-size: 2rem;
		margin: 0;
	}
	p {
		width: 450px;
		margin: 0;
	}
`;

export const ProductGridStyle = styled.div`
	max-width: 1700px;
	margin: auto;
	display: grid;
	/* grid-template-columns: 10% 90%; */
	grid-template-columns: 1fr 7fr;
	grid-template-rows: 1fr;
	grid-column-gap: 30px;
	grid-row-gap: 0px;
	height: 100%;
`;

export const ProductNavStyle = styled.nav`
	display: flex;
	text-align: end;
	flex-direction: column;
	gap: 15px;
	a {
		color: ${(props) => props.theme.colors.primary};
		text-decoration: none;
		font-weight: 400;
		font-size: 1.2rem;
	}
	a:hover {
		text-decoration: underline;
		font-size: 1.3rem;
	}
`;

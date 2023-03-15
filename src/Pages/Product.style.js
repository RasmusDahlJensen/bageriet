import styled from "styled-components";

export const HeaderProductStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
	h2 {
		font-size: 2rem;
		margin: 0;
	}
	p {
		width: 450px;
		margin: 0;
	}
`;

export const ProductStyle = styled.div`
	max-width: 1500px;
	margin: auto;
	display: grid;
	grid-template-columns: 10% 90%;
	grid-template-rows: 1fr;
	grid-column-gap: 30px;
	grid-row-gap: 0px;
	height: 100%;
`;

export const ProductNavStyle = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

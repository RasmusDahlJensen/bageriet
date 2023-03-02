import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
		font-family: ${(props) => props.theme.fonts[1]};
		font-size: 1rem;

}

`;

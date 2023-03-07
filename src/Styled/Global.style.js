import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
		font-family: ${(props) => props.theme.fonts[1]};
		font-size: 1rem;


}
html, body{
	width: 100%;
	height: 100%;
}

#root{
	width: 100%;
	min-height: 100%;
	/* display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	gap: 1rem; */
}

h1, h2, h3, h4{
	font-family: ${(props) => props.theme.fonts[0]};

}
h1{
	user-select: none;
}

p
   {
   white-space: normal;
    overflow-wrap: break-word;
	max-width: 90vw;
   }

`;

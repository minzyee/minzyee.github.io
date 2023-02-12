import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import themeColor from "./commons/style/themes/default";

const GlobalStyle = createGlobalStyle`
	
	${reset}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${themeColor.palette.ivory};
	}

	ul,
	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: ${themeColor.palette.black};
	}
`;

export default GlobalStyle;

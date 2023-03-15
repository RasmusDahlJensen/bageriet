import { Link } from "react-router-dom";
import { PageStyle } from "./Page.Style";

export const NotFound = () => {
	return (
		<PageStyle>
			<p>404, page has not been found, please return to the home page</p>
			<Link to="/">
				<button>Homepage</button>
			</Link>
		</PageStyle>
	);
};

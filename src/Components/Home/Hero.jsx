import { NavLink, Outlet } from "react-router-dom";
import { HeroStyle } from "./Hero.style";

export const Hero = () => {
	return (
		<>
			<HeroStyle>
				<ul>
					<li>
						<NavLink to="">FORSIDE</NavLink>
					</li>
					<li>
						<NavLink to="contact">KONTAKT</NavLink>
					</li>
				</ul>
				<h1>bageriet</h1>
				<ul>
					<li>
						<NavLink to="product">PRODUKTER</NavLink>
					</li>
					<li>
						<NavLink to="login">LOGIN</NavLink>
					</li>
				</ul>
				<Outlet />
			</HeroStyle>
		</>
	);
};

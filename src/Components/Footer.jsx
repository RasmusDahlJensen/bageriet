import { FooterStyle } from "./Footer.style";

export const Footer = () => {
	return (
		<FooterStyle>
			<div className="footerOne">
				<a href="#top">
					<svg
						id="Til_toppen_knap"
						data-name="Til toppen knap"
						xmlns="http://www.w3.org/2000/svg"
						width="41"
						height="40"
						viewBox="0 0 41 40"
					>
						<ellipse
							id="Ellipse_2"
							data-name="Ellipse 2"
							cx="20.5"
							cy="20"
							rx="20.5"
							ry="20"
							fill="#6d8fab"
						/>
						<path
							id="Icon_ionic-ios-arrow-up"
							data-name="Icon ionic-ios-arrow-up"
							d="M14.911,14.257l6.595,6.6a1.247,1.247,0,1,0,1.76-1.765l-7.472-7.477a1.244,1.244,0,0,0-1.719-.036L6.551,19.086a1.247,1.247,0,0,0,1.76,1.765Z"
							transform="translate(5.813 3.75)"
							fill="#fff"
						/>
					</svg>
				</a>
				<h2>bageriet</h2>
				<p>Øster Uttrupvej 1 A - 9000 Aalborg</p>
				<p>info@bageriet.dk - 98 1234 5678</p>
			</div>
			<div className="footerTwo">
				<p>Copyright @ 2023 bageriet Aps</p>
			</div>
		</FooterStyle>
	);
};

import { FooterStyle } from "./Footer.style";

export const Footer = () => {
	return (
		<FooterStyle>
			<div className="footerOne">
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

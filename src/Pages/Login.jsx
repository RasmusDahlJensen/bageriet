import { LoginStyle, LoginStyleContainer } from "./Login.style";
import { PageStyle } from "./Page.Style";
import axios from "axios";
import { AuthContext, useAuth } from "../Components/Login/AuthProvider";
import { useContext } from "react";

export const Login = () => {
	const { accessToken, setAccessToken } = useContext(AuthContext);
	const { userId, setUserId } = useContext(AuthContext);
	// console.log("AuthProvider token", accessToken);
	// console.log("Authprovider user id", userId);

	const submitHandle = async (e) => {
		const formData = new URLSearchParams();
		formData.append("username", e.target.form.username.value);
		formData.append("password", e.target.form.password.value);

		const url = "https://api.mediehuset.net/token";

		try {
			const result = await axios.post(url, formData);
			// console.log(result);
			// console.log(result.data.access_token);
			handleSessionData(result.data);
		} catch (err) {
			console.error("Kunne ikke logge ind", err);
		}
	};

	const handleSessionData = (data) => {
		if (data) {
			sessionStorage.setItem("token", JSON.stringify(data.access_token));
			sessionStorage.setItem("userId", JSON.stringify(data.user_id));
			setAccessToken(data.access_token);
			setUserId(data.user_id);
		}
	};

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("userId");
		setAccessToken("");
		setUserId("");
	};

	return (
		<PageStyle>
			{accessToken ? (
				<LoginStyleContainer>
					<LoginStyle>
						<p>Du er logget ind</p>
						<button onClick={handleLogout}>Log ud</button>
					</LoginStyle>
				</LoginStyleContainer>
			) : (
				<LoginStyleContainer>
					<h2>Login</h2>
					<LoginStyle method="POST">
						<div>
							<div>
								<label htmlFor="username">Brugernavn</label>
								<input type="text" name="username" />
							</div>
							<div>
								<label htmlFor="password">Adgangskode</label>
								<input type="password" name="password" />
							</div>
						</div>
						<div>
							<button type="button" onClick={(e) => submitHandle(e)}>
								Login
							</button>
						</div>
					</LoginStyle>
				</LoginStyleContainer>
			)}
		</PageStyle>
	);
};

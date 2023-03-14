import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState({});
	const [userId, setUserId] = useState({});

	useEffect(() => {
		if (sessionStorage.getItem("token")) {
			setAccessToken(JSON.parse(sessionStorage.getItem("token")));
			setUserId(JSON.parse(sessionStorage.getItem("userId")));
		}
	}, [children]);

	return (
		<AuthContext.Provider
			value={{ accessToken, setAccessToken, userId, setUserId }}
		>
			{children}
		</AuthContext.Provider>
	);
};

// export const useAuth = () => useContext(AuthContext);

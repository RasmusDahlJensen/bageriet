import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CommentStyle } from "./Comment.style";
import { AuthContext } from "../Login/AuthProvider";

export const Comments = () => {
	const params = useParams();
	const { accessToken, setAccessToken } = useContext(AuthContext);
	const { userId, setUserId } = useContext(AuthContext);
	console.log(params);
	console.log(accessToken);
	console.log(userId);

	return <CommentStyle>Comments</CommentStyle>;
};

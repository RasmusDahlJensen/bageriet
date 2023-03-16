import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentStyle, FormStyle } from "./Comment.style";
import { AuthContext } from "../Login/AuthProvider";
import axios from "axios";

export const Comments = () => {
	const params = useParams();
	const { accessToken, setAccessToken } = useContext(AuthContext);
	const { userId, setUserId } = useContext(AuthContext);
	// console.log(params);
	// console.log(accessToken);
	// console.log(userId);

	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
	};

	let userUrl = `https://api.mediehuset.net/bakeonline/comments/1`;
	let commentUrl = `https://api.mediehuset.net/bakeonline/comments`;

	const [comments, getComments] = useState([]);

	useEffect(() => {
		axios.get(userUrl, config).then((data) => {
			console.log(data);
			getComments(data);
			// console.log(comments);
		});
	}, []);

	const submitComment = (e) => {
		let bodyParameters = {
			title: `${e.target.form.title.value}`,
			comment: `${e.target.form.comment.value}`,
			user_id: `${userId}`,
			product_id: `${params.prod_id}`,
			active: true,
		};
		// console.log(bodyParameters);
		// console.log(config);
		// Post comment

		axios
			.post(commentUrl, bodyParameters, config)
			.then(console.log)
			.catch((err) => console.error(err));
	};

	return (
		<CommentStyle>
			<FormStyle>
				<div className="title">
					<input type="text" id="title" placeholder="Titel.." />
				</div>
				<div>
					<textarea
						name="comment"
						id="comment"
						cols="50"
						rows="10"
						placeholder="Kommentar..."
					></textarea>
				</div>
				<button type="button" onClick={submitComment}>
					Indsæt
				</button>
			</FormStyle>
		</CommentStyle>
	);
};

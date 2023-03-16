import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentContainer, CommentStyle, FormStyle } from "./Comment.style";
import { AuthContext } from "../Login/AuthProvider";
import axios from "axios";
import pfp from "../../Assets/images/pfpplaceholder.png";

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

	let productUrl = `https://api.mediehuset.net/bakeonline/comments/${params.prod_id}`;
	let commentUrl = `https://api.mediehuset.net/bakeonline/comments`;

	const [comments, getComments] = useState([]);

	//grab all user comments for the product that's currently being visited
	useEffect(() => {
		axios.get(productUrl, config).then((data) => {
			getComments(data.data.items);
			console.log(comments);
		});
	}, []);

	//Submits the commment that has been written down with user id, though there's nothing stopping you
	//from submitting an empty comment
	const submitComment = (e) => {
		let bodyParameters = {
			title: `${e.target.form.title.value}`,
			comment: `${e.target.form.comment.value}`,
			user_id: `${userId}`,
			product_id: `${params.prod_id}`,
			active: true,
		};
		axios
			.post(commentUrl, bodyParameters, config)
			.then(console.log)
			.catch((err) => console.error(err));
	};

	return (
		<CommentContainer>
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
						placeholder="Fortæl os hvad du syntes..."
					></textarea>
				</div>
				<button type="button" onClick={submitComment}>
					Indsæt
				</button>
			</FormStyle>

			{comments
				? comments.map((comment) => {
						return (
							<CommentStyle key={comment.id}>
								<img src={pfp} alt="" />
								<div>
									<h5>
										{comment.user.firstname} {comment.user.lastname}
									</h5>
									<h6>{comment.title}</h6>
									<p>{comment.comment}</p>
								</div>
							</CommentStyle>
						);
				  })
				: "Ingen kommentarer... vær den første til at skrive noget!"}
		</CommentContainer>
	);
};

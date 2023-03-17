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

		// window.location.reload(false);
	};

	return (
		<div>
			<CommentContainer>
				<h5>KOMMENTARER</h5>
				<div>
					{comments ? comments.length : "0"}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="21.023"
						height="16.351"
						viewBox="0 0 21.023 16.351"
					>
						<path
							id="Icon_awesome-comments"
							data-name="Icon awesome-comments"
							d="M15.183,8.09c0-3.226-3.4-5.84-7.592-5.84S0,4.863,0,8.09a4.952,4.952,0,0,0,1.387,3.358A8.215,8.215,0,0,1,.08,13.437a.29.29,0,0,0-.055.318.286.286,0,0,0,.266.175,6.426,6.426,0,0,0,3.237-.912,9.287,9.287,0,0,0,4.062.912C11.785,13.929,15.183,11.316,15.183,8.09Zm4.453,8.03a4.945,4.945,0,0,0,1.387-3.358c0-2.442-1.953-4.533-4.719-5.405a5.424,5.424,0,0,1,.047.734c0,3.865-3.931,7.008-8.76,7.008a10.943,10.943,0,0,1-1.157-.069c1.15,2.1,3.851,3.573,7,3.573a9.236,9.236,0,0,0,4.062-.912,6.426,6.426,0,0,0,3.237.912A.288.288,0,0,0,21,18.426a.292.292,0,0,0-.055-.318A8.128,8.128,0,0,1,19.636,16.119Z"
							transform="translate(0 -2.25)"
							fill="#bbc8d4"
						/>
					</svg>
				</div>
			</CommentContainer>
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
				<button onClick={submitComment}>Indsæt</button>
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
		</div>
	);
};

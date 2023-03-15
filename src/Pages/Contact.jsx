import { PageStyle } from "./Page.Style";
import { ContactContainer, ContactStyle } from "./Contact.style";
import { ShowMap } from "../Components/Map/Map";

export const Contact = () => {
	return (
		<PageStyle>
			<ContactContainer>
				<ContactStyle>
					<div>
						<div>
							<label htmlFor="name">Dit navn</label>
							<input type="text" name="name" />
						</div>
						<div>
							<label htmlFor="email">Din email</label>
							<input type="email" name="email" />
						</div>
						<div>
							<textarea
								name="comment"
								id="comment"
								cols="30"
								rows="10"
								placeholder="Din besked.."
							></textarea>
						</div>
					</div>
					<div>
						<button type="button">SEND</button>
					</div>
				</ContactStyle>
				<ShowMap />
			</ContactContainer>
		</PageStyle>
	);
};

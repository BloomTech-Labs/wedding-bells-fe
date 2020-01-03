import React from "react";
import { Radio } from "antd";
import Container from "../../components/Container/Container";

const GuestRSVPForm = ({ guest, handleGuestUpdates, handleOnSubmit }) => {
	const { is_going, plus_one } = guest;
	return (
		<section className="rsvp">
			<Container>
				<form onSubmit={e => handleOnSubmit(e)}>
					<div className="radio-group">
						<p className="question">Will You Be Attending?</p>
						<Radio.Group
							name="is_going"
							buttonStyle="solid"
							onChange={handleGuestUpdates}
						>
							<Radio checked={is_going ? true : false} value="true">
								Accepts with Pleasure
							</Radio>
							<Radio checked={is_going ? false : true} value="false">
								Regretfully Declines
							</Radio>
						</Radio.Group>
					</div>
					<div className="radio-group">
						<p className="question">Bringing a Plus-One?</p>
						<Radio.Group
							name="plus_one"
							buttonStyle="solid"
							disabled={is_going === false}
							onChange={handleGuestUpdates}
						>
							<Radio checked={plus_one ? true : false} value="true">
								Yes, Bringing a Plus-One
							</Radio>
							<Radio checked={plus_one ? false : true} value="false">
								No, Attending Alone
							</Radio>
						</Radio.Group>
					</div>
					<input type="submit" value="Send RSVP" />
				</form>
			</Container>
		</section>
	);
};

export default GuestRSVPForm;

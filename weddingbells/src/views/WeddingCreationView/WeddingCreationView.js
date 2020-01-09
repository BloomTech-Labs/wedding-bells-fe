import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Alert, DatePicker } from "antd";
import GeoSuggest from "react-geosuggest";
import styled from "styled-components";
import "./WeddingCreation.scss";

const WeddingCreationForm = ({ couple, history }) => {
	const [address, setAddress] = useState(null);
	const [date, setDate] = useState(null);
	const [errorMsg, setErrorMsg] = useState("");

	/**
	 * Function that creates the slug used for a specific couple's wedding.
	 * @returns {String} ex. `alice-johnson-and-billy-bob-jun-05-2020`
	 */
	const generateSlug = () => {
		const { spouse_one_name, spouse_two_name } = couple;
		return `${spouse_one_name}-and-${spouse_two_name}-${date}`
			.toLowerCase()
			.replace(/ /g, "-");
	};

	/**
	 * Disable days before today (including) today.
	 * References:
	 *  - https://github.com/ant-design/ant-design/blob/master/components/date-picker/demo/disabled-date.md#en-us
	 *  - https://stackoverflow.com/a/17952139/6698029
	 *      (Note: the above is the same logic as `moment().endOf('day')` without all the dependencies)
	 * @param {Moment} current Moment.js date object
	 * @returns {Boolean} Given the current date, returns true if the date is before
	 *                    today, effectively disabling said date. False otherwise,
	 *                    meaning the date is selectable.
	 */
	const disabledDate = current => {
		const actualDate = new Date(); // 2013-07-30 17:11:00
		const endOfDayDate = new Date(
			actualDate.getFullYear(),
			actualDate.getMonth(),
			actualDate.getDate(),
			23,
			59,
			59
		); // 2013-07-30 23:59:59
		return current && current < endOfDayDate;
	};

	const onSubmit = async e => {
		const REACT_APP_BACKEND_BASE_URL =
			process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:5000";
		e.preventDefault();
		try {
			const weddingSlug = generateSlug();
			const { id } = couple;
			const wedding = {
				location: address,
				date,
				slug: weddingSlug,
				couple_id: id,
			};
			const response = await axios.post(
				`${REACT_APP_BACKEND_BASE_URL}/api/weddings`,
				wedding
			);
			const { data } = response;
			localStorage.setItem("wedding", JSON.stringify(data));
			history.push("/couple");
		} catch (error) {
			setErrorMsg(
				"Failed to create wedding! Check your internet connection and wedding data then try again."
			);
			setTimeout(() => setErrorMsg(""), 5000);
		}
	};

	const onSuggestSelect = (selection = {}) => {
		const { description } = selection;
		setAddress(description);
	};

	const onChange = (date, dateString) => {
		setDate(dateString);
	};

	return (
		<div className="wedding-creation-wrapper">
			<h1 className="title">Let's Create Your Wedding</h1>
			<Form onSubmit={onSubmit}>
				<div className="form-item">
					<p>Our wedding venue is located at:</p>
					<GeoSuggest
						country="us"
						types={["geocode", "establishment"]}
						onSuggestSelect={onSuggestSelect}
						className="geosuggest-override"
					/>
				</div>
				<div className="form-item">
					<p>Our wedding date is:</p>
					<DatePicker
						size="large"
						format="MMM-DD-YYYY"
						showToday={false}
						style={{
							width: "300px",
						}}
						disabledDate={disabledDate}
						onChange={onChange}
					/>
				</div>
				<div className="form-item">
					<input
						className="btn btn-primary"
						type="submit"
						value="Create Wedding"
					/>
				</div>
			</Form>
			{errorMsg && (
				<Alert message="Error" description={errorMsg} type="error" showIcon />
			)}
		</div>
	);
};

const Page = styled.div`
	margin: 0 auto;
	padding: 80px 0 0;
	height: 100%;
	min-height: 400px;
	max-width: 800px;
	text-align: left;
`;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	flex-wrap: wrap;
`;

const WeddingCreationView = ({ couple, history }) => {
	return (
		<Page>
			<WeddingCreationForm couple={couple} history={history} />
		</Page>
	);
};

const testData = {
	id: 3,
	spouse_one_name: "Ashley Nicole",
	spouse_two_name: "Blake Jones",
};

const mapStateToProps = state => ({
	couple: state.authReducer.couple || testData,
});

export default connect(mapStateToProps)(withRouter(WeddingCreationView));

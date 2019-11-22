import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Alert, DatePicker } from "antd";
import GeoSuggest from "react-geosuggest";
import styled from "styled-components";
import "../styles/WeddingCreation.scss";

const WeddingCreationForm = ({ couple }) => {
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
			console.log(data);
		} catch (error) {
			console.error(error);
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
		<>
			<Form onSubmit={onSubmit}>
				<GeoSuggest
					country="us"
					types={["geocode", "establishment"]}
					onSuggestSelect={onSuggestSelect}
					className="geosuggest-override"
				/>
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
				<input
					className="btn btn-primary"
					type="submit"
					value="Create Wedding"
				/>
			</Form>
			{errorMsg && (
				<Alert message="Error" description={errorMsg} type="error" showIcon />
			)}
		</>
	);
};

const Page = styled.div`
	margin: 80px auto 0;
	height: 100%;
	min-height: 500px;
	max-width: 800px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const WeddingCreationView = ({ couple }) => {
	return (
		<Page>
			<WeddingCreationForm couple={couple} />
		</Page>
	);
};

const testData = {
	id: 3,
	spouse_one_name: "Ashley Nicole",
	spouse_two_name: "Blake Jones",
};

const mapStateToProps = state => ({
	couple: (state.authReducer && state.authReducer.couple) || testData,
});

export default connect(mapStateToProps)(WeddingCreationView);

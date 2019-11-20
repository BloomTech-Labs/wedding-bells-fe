import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";
import GeoSuggest from "react-geosuggest";
import styled from "styled-components";
import "../styles/WeddingCreation.scss";

const WeddingCreationForm = () => {
	const [address, setAddress] = useState(null);
	const [date, setDate] = useState(null);

	const onSuggestSelect = (selection = {}) => {
		const { description, formatted_address, label, placeId } = selection;
		console.log({
			description,
			label,
			formatted_address,
		});

		setAddress(description);
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

	const onChange = (date, dateString) => {
		console.log({
			date,
			dateString,
		});

		setDate(dateString);
	};

	return (
		<form>
			<GeoSuggest
				country="us"
				types={["geocode", "establishment"]}
				onSuggestSelect={onSuggestSelect}
			/>
			<DatePicker
				size="large"
				format="MMM-DD-YYYY"
				showToday={false}
				disabledDate={disabledDate}
				onChange={onChange}
			/>
		</form>
	);
};

const Page = styled.div`
	margin: 80px auto 0;
	height: 100%;
	min-height: 500px;
	width: 600px;
`;

const WeddingCreationView = () => {
	return (
		<Page>
			<WeddingCreationForm />
		</Page>
	);
};

export default WeddingCreationView;

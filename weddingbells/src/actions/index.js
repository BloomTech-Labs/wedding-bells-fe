import axios from "axios";

// add additional actions with:
// export const ${action_name} = '${action_name}';

export const ANNOUNCEMENT_FAILURE = "ANNOUNCEMENT_FAILURE";
export const ANNOUNCEMENT_START = "ANNOUNCEMENT_START";
export const ANNOUNCEMENT_SUCCESS = "ANNOUNCEMENT_SUCCESS";
export const DELETE_ANNOUNCEMENT_FAILURE = "DELETE_ANNOUNCEMENT_FAILURE";
export const DELETE_ANNOUNCEMENT_START = "DELETE_ANNOUNCEMENT_START";
export const DELETE_ANNOUNCEMENT_SUCCESS = "DELETE_ANNOUNCEMENT_SUCCESS";
export const FETCH_ANNOUNCEMENT_FAILURE = "FETCH_ANNOUNCEMENT_FAILURE";
export const FETCH_ANNOUNCEMENT_START = "FETCH_ANNOUNCEMENT_START";
export const FETCH_ANNOUNCEMENT_SUCCESS = "FETCH_ANNOUNCEMENT_SUCCESS";
export const FETCH_COUPLE_FAILURE = "FETCH_COUPLE_FAILURE";
export const FETCH_COUPLE_START = "FETCH_COUPLE_START";
export const FETCH_COUPLE_SUCCESS = "FETCH_COUPLE_SUCCESS";
export const FETCH_WEDDING_SUCCESS = "FETCH_WEDDING_SUCCESS";
export const FETCH_WEDDING_FAILURE = "FETCH_WEDDING_FAILURE";
export const FETCH_WEDDING_START = "FETCH_WEDDING_START";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const TOGGLE_ANNOUNCEMENT_MODAL = "TOGGLE_ANNOUNCEMENT_MODAL";
export const TOGGLE_AUTH_MODAL = "TOGGLE_AUTH_MODAL";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_WEDDING_FAILURE = "UPDATE_WEDDING_FAILURE";
export const UPDATE_WEDDING_START = "UPDATE_WEDDING_START";
export const UPDATE_WEDDING_SUCCESS = "UPDATE_WEDDING_SUCCESS";
export const LOG_OUT = "LOG_OUT";

const envVarPage = process.env.REACT_APP_BACKEND_BASE_URL;

// == to do: fix fetchWedding so that it can grab a wedding regardless
// == if we give it a slug or id
// export const fetchWedding = creds => dispatch => {
// 	return axios
// 		.get(`${envVarPage}/api/weddings/${creds}`)
// 		.then(res => {
// 			this.setState({ wedding: res.data });
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// };

export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	return axios.post(`${envVarPage}/api/auth/login`, creds).then(res => {
		localStorage.setItem("token", res.data.token);
		localStorage.setItem("couple", JSON.stringify(res.data.couple));
		localStorage.setItem("wedding", JSON.stringify(res.data.wedding));
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
	});
};

export const deleteAnnouncement = announcementId => dispatch => {
	dispatch({ type: DELETE_ANNOUNCEMENT_START });
	const weddingId = JSON.parse(localStorage.wedding).id;
	return axios
		.delete(
			`${envVarPage}/api/weddings/${weddingId}/announcements/${announcementId}`
		)
		.then(res => {
			dispatch({ type: DELETE_ANNOUNCEMENT_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: DELETE_ANNOUNCEMENT_FAILURE });
		});
};

export const fetchAnnouncements = () => dispatch => {
	dispatch({ type: FETCH_ANNOUNCEMENT_START });
	const weddingId = JSON.parse(localStorage.wedding).id;
	return axios
		.get(`${envVarPage}/api/weddings/${weddingId}/announcements`)
		.then(res => {
			dispatch({ type: FETCH_ANNOUNCEMENT_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCH_ANNOUNCEMENT_FAILURE }));
};

export const postAnnouncement = announcement => dispatch => {
	dispatch({ type: ANNOUNCEMENT_START });
	const weddingId = JSON.parse(localStorage.wedding).id;
	return axios
		.post(`${envVarPage}/api/weddings/${weddingId}/announcements`, announcement)
		.then(res => {
			dispatch({ type: ANNOUNCEMENT_SUCCESS });
		})
		.catch(err => dispatch({ type: ANNOUNCEMENT_FAILURE }));
};

export const updateCouple = couple => dispatch => {
	dispatch({ type: UPDATE_USER_START });
	const { id } = JSON.parse(localStorage.couple);
	return axios({
		method: "put",
		url: `${envVarPage}/api/users/${id}`,
		data: couple,
		headers: {
			Authorization: localStorage.token,
		},
	})
		.then(res => {
			console.log(res.data);
			localStorage.setItem("couple", JSON.stringify(res.data));
			dispatch({ type: UPDATE_USER_SUCCESS });
		})
		.catch(err => dispatch({ type: UPDATE_USER_FAILURE }));
};

export const updateWedding = wedding => dispatch => {
	dispatch({ type: UPDATE_WEDDING_START });
	const { id } = JSON.parse(localStorage.wedding);
	return axios({
		method: "put",
		url: `${envVarPage}/api/weddings/${id}`,
		data: wedding,
		headers: {
			Authorization: localStorage.token,
		},
	})
		.then(res => {
			localStorage.setItem("wedding", JSON.stringify(res.data));
			dispatch({ type: UPDATE_WEDDING_SUCCESS });
		})
		.catch(err => dispatch({ type: UPDATE_WEDDING_FAILURE }));
};

export const signup = creds => dispatch => {
	dispatch({ type: SIGNUP_START });
	return axios.post(`${envVarPage}/api/auth/register`, creds).then(res => {
		localStorage.setItem("token", res.data.token);
		localStorage.setItem("couple", JSON.stringify(res.data.couple));
		dispatch({ type: SIGNUP_SUCCESS, payload: res.data.couple });
	});
};

export const logOutUser = () => dispatch => {
	localStorage.setItem("token", "couple");
	localStorage.removeItem("token", "couple");
	window.localStorage.clear();
	return dispatch({ type: LOG_OUT });
};

export const toggleAuthModal = () => dispatch => {
	dispatch({ type: TOGGLE_AUTH_MODAL });
};

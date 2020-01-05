import {
	ANNOUNCEMENT_FAILURE,
	ANNOUNCEMENT_START,
	ANNOUNCEMENT_SUCCESS,
	DELETE_ANNOUNCEMENT_FAILURE,
	DELETE_ANNOUNCEMENT_START,
	DELETE_ANNOUNCEMENT_SUCCESS,
	FETCH_ANNOUNCEMENT_FAILURE,
	FETCH_ANNOUNCEMENT_START,
	FETCH_ANNOUNCEMENT_SUCCESS,
	TOGGLE_ANNOUNCEMENT_MODAL,
} from "../actions";

const initialState = {
	announcements: [],
	announcementModalVisible: false,
	isDeletingAnnouncements: false,
	isFetchingAnnouncements: false,
	isMakingAnnouncements: false,
	error: "",
};

export const announcementReducer = (state = initialState, action) => {
	switch (action.type) {
		case ANNOUNCEMENT_FAILURE:
			return {
				...state,
				isMakingAnnouncements: false,
				error: action.payload,
			};
		case ANNOUNCEMENT_START:
			return {
				...state,
				isMakingAnnouncements: true,
				error: "",
			};
		case ANNOUNCEMENT_SUCCESS:
			return {
				...state,
				isMakingAnnouncements: false,
			};
		case DELETE_ANNOUNCEMENT_FAILURE:
			return {
				...state,
				isDeletingAnnouncements: false,
				error: action.payload,
			};
		case DELETE_ANNOUNCEMENT_START:
			return {
				...state,
				isDeletingAnnouncements: true,
				error: "",
			};
		case DELETE_ANNOUNCEMENT_SUCCESS:
			return {
				...state,
				isDeletingAnnouncements: false,
			};
		case FETCH_ANNOUNCEMENT_FAILURE:
			return {
				...state,
				isFetchingAnnouncements: false,
				error: action.payload,
			};
		case FETCH_ANNOUNCEMENT_START:
			return {
				...state,
				isFetchingAnnouncements: true,
				error: "",
			};
		case FETCH_ANNOUNCEMENT_SUCCESS:
			return {
				...state,
				isFetchingAnnouncements: false,
				announcements: action.payload,
			};
		case TOGGLE_ANNOUNCEMENT_MODAL:
			return {
				...state,
				announcementModalVisible: !state.announcementModalVisible,
			};
		default:
			return state;
	}
};

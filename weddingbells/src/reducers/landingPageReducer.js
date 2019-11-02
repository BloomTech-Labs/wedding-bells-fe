import { TOGGLE_AUTH_MODAL } from "../actions";

const initialState = {
	authModalVisible: false,
	error: "",
};

export const landingPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_AUTH_MODAL:
			return {
				...state,
				authModalVisible: !state.authModalVisible,
			};
		default:
			return state;
	}
};

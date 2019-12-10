import {
	LOGIN_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	SIGNUP_FAILURE,
	SIGNUP_START,
	SIGNUP_SUCCESS,
	LOG_OUT
} from "../actions";

const initialState = {
	isLoggingIn: false,
	isSigningUp: false,
	error: "",
	couple: {},
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP_FAILURE:
			return {
				...state,
				isLoggingIn: false,
				isSigningUp: false,
				error: action.payload,
			};
		case SIGNUP_START:
			return {
				...state,
				isLoggingIn: false,
				isSigningUp: true,
				error: "",
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				isLoggingIn: false,
				isSigningUp: false,
				error: "",
				couple: action.payload,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoggingIn: false,
				isSigningUp: false,
				error: action.payload,
			};
		case LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
				isSigningUp: false,
				error: "",
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggingIn: false,
				isSigningUp: false,
				error: "",
				couple: action.payload.couple,
				wedding: action.payload.wedding,
			};
		
		case LOG_OUT:
			return {
				isLoggingIn: false,
				isSigningUp: false,
				error: "",
				couple: {},
			
			};
		default:
			return state;
	}
};

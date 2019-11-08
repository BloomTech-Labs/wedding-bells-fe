import axios from "axios";

// add additional actions with:
// export const ${action_name} = '${action_name}';

export const TOGGLE_AUTH_MODAL = "TOGGLE_AUTH_MODAL";

export const toggleAuthModal = () => dispatch => {
	dispatch({ type: TOGGLE_AUTH_MODAL });
};

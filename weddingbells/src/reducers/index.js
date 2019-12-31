import { combineReducers } from "redux";
// add additional reducers with:
// import { ${reducer_name} } from ${reducer_location};
import { announcementReducer } from "./announcementReducer.js";
import { authReducer } from "./authReducer.js";
import { landingPageReducer } from "./landingPageReducer.js";

export default combineReducers({
	// add additional reducers with:
	// ${reducer_name},
	announcementReducer,
	authReducer,
	landingPageReducer,
});

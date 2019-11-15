import { combineReducers } from "redux";
// add additional reducers with:
// import { ${reducer_name} } from ${reducer_location};
import { landingPageReducer } from "./landingPageReducer.js";
import { authReducer } from "./authReducer.js";

export default combineReducers({
	// add additional reducers with:
    // ${reducer_name}
    authReducer,
	landingPageReducer,
});

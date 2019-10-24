import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<Header />
			<App />
			<Footer />
		</Provider>
	</Router>,
	document.getElementById("root")
);

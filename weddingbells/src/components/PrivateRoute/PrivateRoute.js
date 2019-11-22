import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => {
    return (
        <Route
            {...theRest}
            render={() => {
                if (localStorage.getItem("token")) {
                    return <Component />;
                } else {
                    return <Redirect to="/" />;
                }
            }}
            />
    )
}

// NETLIFY's AUTHENTICATION PRIVATE ROUTE
// function PrivateRoute({ component: Component, ...rest }) {
// 	return (
// 		<Route
// 			{...rest}
// 			render={props =>
// 				netlifyAuth.isAuthenticated ? (
// 					<Component {...props} />
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: "/loggedin",
// 							state: { from: props.location },
// 						}}
// 					/>
// 				)
// 			}
// 		/>
// 	);
// }

export default PrivateRoute;

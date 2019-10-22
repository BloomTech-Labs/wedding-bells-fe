import React, { Component } from "react";

import Header from "../components/Header/Header";

export default class LandingPageView extends Component {
    render() {
        return (
            <div className="landingpage_wrapper">
                <Header />
                This is going to be the landing page!
            </div>
        )
    }
}
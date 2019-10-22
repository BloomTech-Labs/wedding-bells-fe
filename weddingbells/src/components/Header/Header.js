import React, { Component } from "react";
import styled from "styled-components";

const Navbar = styled.div`
    // border
    border: 1px red solid;

    // sizing & placement
    height: 80px;

    // background
    background-color: #c4c4c4;

    // display
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    // text
    font-size: 23px;
`;

const Logo = styled.div`
    // size & placement
    margin-left: 75px;
`;

const Links = styled.div`
    // size & placement
    margin-right: 75px;
    width: 30%;

    // display
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

class Header extends Component {
    render() {
        return (
            <Navbar className="header_wrapper">
                <Logo className="header_logo">
                    Wedding Bells
                </Logo>
                <Links className="header_links">
                    <div className="link">
                        Services
                    </div>
                    <div className="link">
                        FAQ
                    </div>
                    <div className="link">
                        About Us
                    </div>
                    <div className="link">
                        Login/Signup
                    </div>
                </Links>
            </Navbar>
        )
    }
}

export default Header;
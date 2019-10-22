import React, { Component } from "react";
import styled from "styled-components";

const Navbar = styled.div`
    border: 1px red solid;
`;

class Header extends Component {
    render() {
        return (
            <Navbar className="header">
                I'm going to be a header!
            </Navbar>
        )
    }
}

export default Header;
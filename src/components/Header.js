import React from "react";
import styled from "styled-components";

function Header({ sideBarToggle, setSideBarToggle }) {
    return (
        <Wrapper>
            <HeaderItem
                onClick={() => {
                    setSideBarToggle(!sideBarToggle);
                }}
            >
                <i className="fas fa-bars" />
            </HeaderItem>
            <HeaderItem>
                <i className="fas fa-border-all" />
                <span>Dashboard</span>
            </HeaderItem>
            {/* <HeaderItem
                onClick={() => {
                    setSideBarToggle(!sideBarToggle);
                }}
            >
                <i className="fas fa-images" />
                <span>Collections</span>
            </HeaderItem> */}
            <Placeholder />
            <HeaderItem>
                <Profile>
                    <img
                        src="https://avatars.githubusercontent.com/u/61084415?v=4"
                        alt=""
                    />
                </Profile>
            </HeaderItem>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    background-color: #20212d;
    padding: 0 20px;
    -webkit-box-shadow: 0px 4px 15px 0px #121212;
    box-shadow: 0px 4px 15px 0px #121212;
    position: sticky;
    top: 0;
    z-index: 10;
`;
const HeaderItem = styled.div`
    color: #eee;
    padding: 10px 16px;
    border-radius: 4px;
    gap: 10px;
    span {
        margin-left: 10px;
        font-weight: 500;
    }
    &:hover {
        background-color: #18181f;
        transition: 0.3s;
        cursor: pointer;
    }
`;
const Placeholder = styled.div`
    flex: 1;
`;
const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 40px;
        border-radius: 50%;
    }
`;

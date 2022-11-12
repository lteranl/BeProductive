import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ContentList from "./components/ContentList";
import Sidebar from "./components/Sidebar";

function App() {
    const [sideBarToggle, setSideBarToggle] = useState(false);
    const categoryList = [
        {
            name: "Personal",
            color: "#fd76a1",
            icon: "fas fa-user",
        },
        {
            name: "Work",
            color: "#70c4be",
            icon: "fas fa-briefcase",
        },
        {
            name: "Fitness",
            color: "#ab6ddf",
            icon: "fa-solid fa-dumbbell",
        },
    ];
    return (
        <Wrapper>
            <Header
                sideBarToggle={sideBarToggle}
                setSideBarToggle={setSideBarToggle}
            />
            <Main>
                <Sidebar
                    sideBarToggle={sideBarToggle}
                    categoryList={categoryList}
                />
                <MainContent
                // style={{
                //     width: `calc(100vw - (${
                //         sideBarToggle ? "300px" : "110px"
                //     }))`,
                // }}
                >
                    <Content>
                        <Title>Dashboard</Title>
                        <Greeting>Good morning, User</Greeting>
                        {categoryList.map((category) => {
                            return (
                                <ContentList
                                    key={category.name}
                                    name={category.name}
                                    color={category.color}
                                    icon={category.icon}
                                    sideBarToggle={sideBarToggle}
                                    categoryList={categoryList}
                                />
                            );
                        })}
                    </Content>
                </MainContent>
            </Main>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    background-color: #18181f;
    min-height: 100vh;
    min-width: 10vw;
    color: #eee;
`;
const Main = styled.div`
    display: flex;
    /* padding-left: 350px; */
`;
const MainContent = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.3s;
    width: 100%;
    padding-left: 6rem;
`;
const Content = styled.div`
    max-width: 30rem;
    width: 100%;
    @media (max-width: 768px) {
        max-width: 80%;
    }
    @media (max-width: 468px) {
        max-width: 80%;
    }
`;
const Title = styled.div`
    margin: 50px 0;
    font-size: 30px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 28px;
    }
    @media (max-width: 468px) {
        font-size: 24px;
    }
`;
const Greeting = styled.div`
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 800;
    @media (max-width: 768px) {
        font-size: 30px;
    }
    @media (max-width: 468px) {
        font-size: 28px;
    }
`;

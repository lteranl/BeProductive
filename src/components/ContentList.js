import React, { useState } from "react";
import ContentItems from "./ContentItems";
import styled from "styled-components";
import ContentInput from "./ContentInput";

function ContentList({ name, color, icon }) {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // adds the task to setTask state
    const addButtonHandler = () => {
        //user not able to add empty tasks
        if (task.length > 0) {
            setTasks([
                { id: tasks.length, title: task, completed: false },
                ...tasks,
            ]);
            setTask("");
        }
    };
    return (
        <Wrapper>
            <ContentCategoryHeader>
                <CategoryIcon style={{ background: color }}>
                    <i className={icon}></i>
                </CategoryIcon>
                <Title>{name}</Title>
                <ContentInput
                    task={task}
                    setTask={setTask}
                    addButtonHandler={addButtonHandler}
                />
            </ContentCategoryHeader>
            {/* mapping through tasks arr and passing props to contentItems component */}
            {tasks.map((task, index) => {
                return (
                    <ContentItems
                        key={index}
                        task={task}
                        tasks={tasks}
                        setTasks={setTasks}
                        color={color}
                    />
                );
            })}
        </Wrapper>
    );
}

export default ContentList;

const Wrapper = styled.div`
    background-color: #20212d;
    margin-bottom: 30px;
    border-radius: 20px;
    overflow: hidden;
`;
const ContentCategoryHeader = styled.div`
    background-color: #272833;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
    @media (max-width: 468px) {
        flex-direction: column;
        align-items: center;
        height: 150px;
        gap: 10px;
    }
`;
const CategoryIcon = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;
const Title = styled.div`
    flex: 1;
    font-size: 18px;
    font-weight: 600;
    @media (max-width: 768px) {
        display: none;
    }
`;

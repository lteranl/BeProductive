import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ContentItems({ task, tasks, setTasks, color }) {
    const [editedTask, setEditedTask] = useState(task.title);

    useEffect(() => {
        setEditedTask(task.title);
    }, [task]);

    //remove task from list by filtering it out.
    const deleteTask = () => {
        const currentTaskId = task.id;
        setTasks(tasks.filter((task) => currentTaskId !== task.id));
    };

    const saveEditedTaskHandler = () => {
        const currentTaskId = task.id;
        // if task.id is the same thats was clicked, if true change the task obj and set title to editedTask, if false keep it as it was
        setTasks(
            tasks.map((task) =>
                task.id === currentTaskId
                    ? { ...task, title: editedTask }
                    : task
            )
        );
    };
    const completeTask = () => {
        const currentTaskId = task.id;
        // if task.id is the same as the one that was clicked, if true change the task obj and set completed to opposite (true === false, false === true), if false keep it as it was
        setTasks(
            tasks.map((task) =>
                task.id === currentTaskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };
    return (
        <ContentListItem>
            <ListItemWrapper>
                <CheckBox
                    style={{ color: color }}
                    className={
                        task.completed ? "fas fa-check-circle" : "far fa-circle"
                    }
                    onClick={completeTask}
                />
                {/* displaying task */}
                <input
                    style={{
                        textDecoration: task.completed
                            ? "line-through"
                            : "none",
                        color: task.completed ? "#585968" : "#fff",
                    }}
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            saveEditedTaskHandler();
                        }
                    }}
                />
            </ListItemWrapper>
            <IconWrapper>
                {/* conditional rendering to show check mark, only show when task has been edited */}
                {/* whend task and edited task are not the same then render checkmark */}
                {task.title !== editedTask && (
                    <SaveContentItem
                        className="fas fa-check"
                        onClick={saveEditedTaskHandler}
                    />
                )}
                {/* once icon is clicked it fires off deleteTask and filters out task out of arr */}
                <DeleteContentItem
                    className="fas fa-trash-alt"
                    onClick={deleteTask}
                />
            </IconWrapper>
        </ContentListItem>
    );
}

export default ContentItems;
const ListItemWrapper = styled.div`
    @media (max-width: 468px) {
        display: flex;
        margin-bottom: 20px;
    }
`;

const ContentListItem = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 20px;
    input {
        font-size: 22px;
        outline: none;
        background: none;
        border: none;
        color: #eee;
        width: 80%;
        border-radius: 8px;
        padding-left: 10px;
    }
    input:focus {
        background-color: #272833;
    }
    @media (max-width: 468px) {
        height: 150px;
        flex-direction: column;
        justify-content: center;
    }
`;
const CheckBox = styled.i`
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`;
const DeleteContentItem = styled.i`
    color: #ff1605;
    padding: 10px 16px;
    margin-left: 14px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover {
        background-color: #7e2601;
        transition: 0.3s;
        cursor: pointer;
    }
`;
const SaveContentItem = styled.i`
    padding: 10px 16px;
    border-radius: 4px;
    margin-right: -12px;
    color: #42c732;

    &:hover {
        background-color: #2b6127;
        transition: 0.3s;
        cursor: pointer;
    }
`;

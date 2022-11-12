import React from "react";
import styled from "styled-components";

function ContentInput({ task, setTask, addButtonHandler }) {
    return (
        <Wrapper>
            <CategoryInput
                value={task}
                onChange={(e) => setTask(() => e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        addButtonHandler();
                    }
                }}
            />
            <AddContentItem
                className="fas fa-plus"
                onClick={addButtonHandler}
            />
        </Wrapper>
    );
}

export default ContentInput;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CategoryInput = styled.input`
    height: 30px;
    font-size: 18px;
    outline: none;
    border: none;
    background-color: #20212d;
    border-radius: 4px;
    color: #fff;
    padding: 4px 10px;
    margin-right: 4px;
    @media (max-width: 768px) {
        width: 60%;
    }
    @media (max-width: 468px) {
        margin-left: 5px;
        width: 70%;
    }
`;
const AddContentItem = styled.i`
    padding: 10px 16px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover {
        background-color: #20212d;
        cursor: pointer;
    }
`;

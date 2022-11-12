import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ContentInput from "./ContentInput";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
function Sidebar({ sideBarToggle, categoryList }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Wrapper style={{ width: `${sideBarToggle ? "300px" : "110px"}` }}>
            <Title>{sideBarToggle ? "Be Productive" : "BP"}</Title>
            <CategoryList>
                {categoryList.map((category) => (
                    <Category key={category.name}>
                        <CategoryIcon
                            style={{ backgroundColor: category.color }}
                            onClick={handleOpen}
                        >
                            <i className={category.icon}></i>
                        </CategoryIcon>
                        {sideBarToggle && <span>{category.name}</span>}
                    </Category>
                ))}
                {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <ContentInput />
                    </Box>
                </Modal> */}
            </CategoryList>
        </Wrapper>
    );
}

export default Sidebar;

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0;
    height: 100vh;
    background-color: #20212d;
    padding-left: 35px;
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    padding: 120px 0 30px;
`;
const CategoryList = styled.div`
    padding-right: 40px;
    cursor: no-drop;
`;
const Category = styled.div`
    display: flex;
    align-items: center;
    margin: 30px -16px;
    padding: 10px 16px;
    border-radius: 4px;
    cursor: no-drop;
    /* width: 90%; */

    span {
        margin-left: 10px;
        font-weight: 500;
        font-size: 18px;
    }
    &:hover {
        background-color: #18181f;
        cursor: no-drop;
    }
`;
const CategoryIcon = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: grid;
    place-items: center;
    cursor: no-drop;
`;

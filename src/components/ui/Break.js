import React from "react";
import styled from "@emotion/styled";
import bbreak from "../break.svg"

const BreakCont = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
    position: relative;
    margin: 40px 0;
`;

const Break = () => {
    return (
        <BreakCont>
            <img src={bbreak} />
        </BreakCont>
    )
}

export default Break;


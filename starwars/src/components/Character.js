import React from "react";
import styled from "styled-components";

const StyledCharacterBox = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    margin: 1rem 0 1rem 0;
    padding: 1rem;
    background: grey;
`;

function Character(props) {
    const {name, gender, homeworld, species} = props;

    return (
        <StyledCharacterBox>
            <h3>Name: {name}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Homeworld: {homeworld}</h3>
            <h3>Species: {species}</h3>
        </StyledCharacterBox>
    )
}

export default Character;
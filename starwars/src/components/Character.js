import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const StyledCharacterBox = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    margin: 1rem 0 1rem 0;
    padding: 1rem;
    background: grey;
`;

function Character(props) {
    const {name, gender, homeworldURL, speciesURL} = props;
    const [[homeworld, species], setHandS] = useState([]);

    useEffect(() => {
        const homeworldPromise = axios.get(homeworldURL);
        const speciesPromise = axios.get(speciesURL);

        Promise.all([homeworldPromise, speciesPromise])
            .then(([homeworldRes, speciesRes]) => {
                setHandS([homeworldRes.data.name, speciesRes.data.name]);
                console.log("hello");
            })
            .catch(error => {
                debugger
            });
    }, []);
    // Now that I think about it, it would probably have been best to embed this in the original query, so that everything loads at once!

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
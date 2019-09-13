import React from "react";

function Character(props) {
    const {name, gender, homeworld, species} = props;

    return (
        <div>
            {name}
        </div>
    )
}

export default Character;
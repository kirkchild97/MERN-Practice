import { render } from "@testing-library/react";
import React from "react";

const PersonCard = props => {
    const { name, age, hairColor } = props;
    return(
        <div>
            <h2>{ name }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor}</p>
        </div>
    )
}
export default PersonCard;
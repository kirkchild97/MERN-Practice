import React, { useState } from "react";



const PersonCard = props => {
    const { name, age, hairColor } = props;
    const [ personAge, setPersonAge] = useState(age);

    const raiseAge = () => setPersonAge(personAge + 1 );
    const lowerAge = () => setPersonAge(personAge - 1 );

    return(
        <div>
            <h2>{ name }</h2>
            <p>Age: { personAge }</p>
            <p>Hair Color: { hairColor}</p>
            <button onClick={ raiseAge }>Raise Age</button>
            <button onClick={ lowerAge }>Lower Age</button>
        </div>
    )
}
export default PersonCard;
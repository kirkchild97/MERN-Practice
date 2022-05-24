import React, { Component } from 'react';

class PersonList extends Component {
    
    render() { 
        const { people } = this.props;
        return <ul>
            { people.map((person, i) => {
                return (
                    <li key={i} className='card col-4'>
                        <div>{person.name}</div>
                        <div>Age: {person.age}</div>
                        <div>Hair Color: {person.hairColor}</div>
                        <button onClick={() => this.props.addAge(i)}>Birthday!!!!</button>
                    </li>
                )
            })}
        </ul>;
    }
}

export default PersonList;
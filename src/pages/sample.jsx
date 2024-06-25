import React from 'react';

function RenderList({ names, ages }) {
    if (names.length !== ages.length) {
        return <p>Error: The arrays must have the same length.</p>;
    }

    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>
                    {name} is {ages[index]} years old.
                </li>
            ))}
        </ul>
    );
}

function App() {
    const names = ['Alice', 'Bob', 'Charlie'];
    const ages = [25, 30, 35];

    return (
        <div>
            <h1>Names and Ages</h1>
            <RenderList names={names} ages={ages} />
        </div>
    );
}

export default App;

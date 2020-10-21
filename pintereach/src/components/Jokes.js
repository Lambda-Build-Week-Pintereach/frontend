import React from 'react';

const Jokes = props => {
    const { setup, punchline } = props;

    return (
        <div>
            <p>Joke: {setup}</p>
            <p>Answer: {punchline}</p>
        </div>
    )
}

export default Jokes;


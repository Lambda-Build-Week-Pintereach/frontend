import React from 'react';

const Joke = props => {
    const { setup, punchline } = props;

    return (
        <div>
            <h5>Jokes</h5>
            <p>Joke: {setup}</p>
            <p>Answer: {punchline}</p>
        </div>
    )
}

export default Joke;


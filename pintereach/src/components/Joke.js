import React from 'react';

const Joke = props => {
    const { setup, punchline } = props;

    return (
        <div>
            <p className="joke">Joke: {setup}</p>
            <p className="answer">Answer: {punchline}</p>
        </div>
    )
}

export default Joke;


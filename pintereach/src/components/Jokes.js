import React from 'react';

const Jokes = props => {
    const { setup, punchline } = props;

    return (
        <div>
            <p className="joke">{setup}</p>
            <p className="answer">{punchline}</p>
        </div>
    )
}

export default Jokes;


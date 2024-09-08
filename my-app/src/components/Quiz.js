import React, { useState } from 'react';

function Quiz() {
    const [score, setScore] = useState(0);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    return (
        <section>
            <h2>Quiz</h2>
            <div>
                <p>Question 1: What is 2 + 2?</p>
                <button onClick={() => handleAnswer(true)}>4</button>
                <button onClick={() => handleAnswer(false)}>5</button>
            </div>
            <p>Your score: {score}</p>
        </section>
    );
}

export default Quiz;

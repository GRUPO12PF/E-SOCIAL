import React, { useState, useEffect } from "react";

import styles from  "../Quizzes/Quizz.module.css";

const FlashCard = ({ question, answer, incrementIndex }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  return (
    <>
      <div
        className={styles.flashcardcontainer}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer && question}
        {showAnswer && answer}
      </div>
      {showAnswer && (
        <button onClick={incrementIndex} className={styles.flashcardbutton}>
          Siguiente pregunta
        </button>
      )}
    </>
  );
};

export default FlashCard;
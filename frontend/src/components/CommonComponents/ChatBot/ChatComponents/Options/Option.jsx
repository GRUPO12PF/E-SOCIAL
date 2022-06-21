import React from "react";
import styles from '../Options/Options.module.css'

const Options = (props) => {
  const options = [
    {
      text: "Registrarme",
      handler: props.actionProvider.handleRegistrarmeQuiz,
      id: 1,
    },
    { 
    text: "Comprar",
     handler: props.actionProvider.handleComprarQuiz ,
     id: 2 
    },
    { text: "Pagar", 
    handler: props.actionProvider.handlePagarQuiz, 
    id: 3 
  }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className={styles.optionButton}>
      {option.text}
    </button>
  ));

  return <div className={styles.optionContainer}>{buttonsMarkup}</div>;
};

export default Options;
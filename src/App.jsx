import React, { useState, useEffect } from 'react';
import './App.css';
import az from './translations/az/global.json';
import en from './translations/en/global.json';
import questionsData from '../questions.json';
import charactersData from '../characters.json';

function App() {
  const [language, setLanguage] = useState('en');
  const [winningText, setWinningText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredCharacters, setFilteredCharacters] = useState(charactersData);
  const [winningCharacter, setWinningCharacter] = useState(null);

  const translations = language === 'en' ? en : az;

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const handleAnswer = (answer) => {
    let updatedCharacters = [...filteredCharacters];

    switch (questionsData[currentQuestionIndex].id) {
      case 1: // Is your character real?
        updatedCharacters = updatedCharacters.filter(character => character.real === (answer === "yes"));
        break;

      case 2: // Is your character male?
      updatedCharacters = updatedCharacters.filter(character => character.male === (answer === "yes"));



      default:
        break;
    }

    setFilteredCharacters(updatedCharacters);

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };


  useEffect(() => {
    if (filteredCharacters.length === 0) {
      setErrorMessage(translations.error.message);
    } else {
      setErrorMessage('');
    }
  }, [filteredCharacters]);

  useEffect(() => {
    if (filteredCharacters.length === 1) {
      setWinningText(translations.winner.text);
      setWinningCharacter(filteredCharacters[0]);
    } else {
      setWinningText('');
      setWinningCharacter(null);
    }
  }, [filteredCharacters]);


  return (
    <>
      <ul className="language-options" style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <li>
          <button className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')} style={{ minWidth: '130px' }}>
            English
          </button>
        </li>
        <li>
          <button className={language === 'az' ? 'active' : ''} onClick={() => changeLanguage('az')} style={{ minWidth: '130px', marginLeft: '10px' }}>
            Azərbaycan
          </button>
        </li>
      </ul>

      <div className='App'>
        <h1>{translations.uppertexth.first}</h1>
        <h2>{translations.uppertexth.second}</h2>

        <div className="questionHolder">
          <h3>{questionsData[currentQuestionIndex].id} : {questionsData[currentQuestionIndex][language]}</h3>

          {errorMessage && (
            <h1 className="error-message">{translations.error.message}</h1>
          )}
          {winningText && (
            <>
              <h1 className="error-message">{translations.winner.text}</h1>
              <h2 style={{
                color: "gold",
                textDecoration: "underline"
              }}>{winningCharacter.name}</h2>
            </>
          )}

          <div className="buttonholder">
            <button onClick={() => handleAnswer('yes')}>{translations.button.first}</button>
            <button onClick={() => handleAnswer('no')}>{translations.button.second}</button>
            <button onClick={() => handleAnswer("I don't know")}>{translations.button.third}</button>
          </div>
        </div>

        <div className="filteredCharacters">
          <h3>Filtered Characters:</h3>
          <ul style={{
            marginTop: "5px"
          }}>
            {filteredCharacters.map((character, index) => (
              <li key={index}>{character.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
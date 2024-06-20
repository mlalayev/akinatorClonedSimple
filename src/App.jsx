import React, { useState } from 'react';
import './App.css';
import az from './translations/az/global.json';
import en from './translations/en/global.json';
import questionsData from '../questions.json';
import charactersData from '../characters.json';

function App() {
  const [language, setLanguage] = useState('en');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredCharacters, setFilteredCharacters] = useState(charactersData);

  const translations = language === 'en' ? en : az;

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const handleAnswer = (answer) => {
    let updatedCharacters = [...filteredCharacters];

    switch (questionsData[currentQuestionIndex].id) {
      case 1: // is your character real
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.real === "real");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.real === "not-real");
        }
        break;

      case 2: // is your character male
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.gender === "male");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.gender === "female");
        }
        break;

      case 3: // human?
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.human === true);
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.human !== false);
        }
        break;

      case 4: //fictional
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.fictional === true);
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.fictional === false);
        }
        break;

      case 5: // female
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.gender === "female");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.gender === "male");
        }
        break;

      case 6: //azerbaijani
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.universe === "Azerbaijan");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.universe !== "Azerbaijan");
        }
        break;

      case 7: //turkish
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.universe === "Turkey");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.universe !== "Turkey");
        }
        break;

      case 8: //adult
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.age === "adult");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.age !== "adult");
        }
        break;

      case 9: //child
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.age === "child");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.age !== "child");
        }
        break;

      case 10: // cartoon
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "cartoon");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "cartoon");
        }
        break;

      case 11: // celebrity
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.alive === true);
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.alive !== true);
        }
        break;

      case 12: //president
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "President");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "President");
        }
        break;


      default:
        break;
    }

    setFilteredCharacters(updatedCharacters);

    // Move to the next question if there are more questions
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

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
          <p>{questionsData[currentQuestionIndex].id}</p>
          <p>{questionsData[currentQuestionIndex][language]}</p>


          <div className="buttonholder">
            <button onClick={() => handleAnswer('yes')}>{translations.button.first}</button>
            <button onClick={() => handleAnswer('no')}>{translations.button.second}</button>
            <button onClick={() => handleAnswer("I don't know")}>{translations.button.third}</button>
          </div>
        </div>

        <div className="filteredCharacters">
          <h3>Filtered Characters:</h3>
          <ul style={{
            marginTop: "500px"
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

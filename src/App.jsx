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

      case 13: //superhero
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "superhero");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "superhero");
        }
        break;

      case 14: //marvel universe
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.universe === "Marvel");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.universe !== "Marvel");
        }
        break;

      case 15: // DC universe
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.universe === "DC");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.universe !== "DC");
        }
        break;

      case 16: // entertainer
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "singer" || character.category === "actor" || character.category === "actress" || character.category === "dancer");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => !(character.category === "singer" || character.category === "actor" || character.category === "actress" || character.category === "dancer"));
        }
        break;

      case 17: // nuclear safety inspector
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "Nuclear Safety Inspector");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "Nuclear Safety Inspector");
        }
        break;

      case 18: // explorer
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "Explorer");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "Explorer");
        }
        break;

      case 19: // monster
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "monster");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "monster");
        }
        break;

      case 20: // singer-songwriter
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "singer" && character.occupation === "Singer-Songwriter");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => !(character.category === "singer" && character.occupation === "Singer-Songwriter"));
        }
        break;

      case 21: // actor
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "actor" || character.category === "actress");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => !(character.category === "actor" || character.category === "actress"));
        }
        break;

      case 22: // trickster
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "trickster");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "trickster");
        }
        break;

      case 23: // Chancellor
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "Chancellor");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "Chancellor");
        }
        break;

      case 24: // astronaut
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "astronaut");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "astronaut");
        }
        break;

      case 25: // scientist
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "scientist");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "scientist");
        }
        break;

      case 26: // poet
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "poet");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "poet");
        }
        break;

      case 27: // dancer
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "dancer");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "dancer");
        }
        break;

      case 28: // writer
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "writer");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "writer");
        }
        break;

      case 29: // composer
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "composer");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "composer");
        }
        break;

      case 30: // revolutionary
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "Revolutionary");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "Revolutionary");
        }
        break;

      case 31: // dictator
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "Dictator");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "Dictator");
        }
        break;

      case 32: // physiologist
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "Physiologist");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "Physiologist");
        }
        break;

      case 33: // general secretary of the Communist Party
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation === "General Secretary of the Communist Party");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.occupation !== "General Secretary of the Communist Party");
        }
        break;

      case 34: // ballet dancer
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "dancer" && character.occupation === "Ballet Dancer");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => !(character.category === "dancer" && character.occupation === "Ballet Dancer"));
        }
        break;

      case 35: // animal
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "animal");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "animal");
        }
        break;

      case 36: // leader
        if (answer === "yes") {
          updatedCharacters = updatedCharacters.filter(character => character.category === "leader");
        } else if (answer === "no") {
          updatedCharacters = updatedCharacters.filter(character => character.category !== "leader");
        }
        break;


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
      setWinningCharacter(filteredCharacters[0]); // Set winning character if only one remains
    } else {
      setWinningText('');
      setWinningCharacter(null); // Reset winning character if not exactly one
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
          <p>{questionsData[currentQuestionIndex].id}</p>
          <p>{questionsData[currentQuestionIndex][language]}</p>

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
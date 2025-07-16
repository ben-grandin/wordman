import { useState } from 'react';
import GameInput from './game-input';
import GameStatus from './game-status';
import generateRandomColor from '../lib/generate-random-color';

export const Game = ({ correctAnswer, setCorrectAnswer }) => {
  const [ colorGuess, setColorGuess ] = useState('');
  const [ hasGuessed, setHasGuessed ] = useState(false);
  const [ isWinner, setIsWinner ] = useState(false);

  if (hasGuessed) {
    if (correctAnswer === colorGuess) {
      setIsWinner(true);
    }
  }

  return (
    <>
      <GameInput
        value={colorGuess}
        onChange={(e) => setColorGuess(e.target.value)}
        onSubmit={() => setHasGuessed(true)}
        disabled={hasGuessed}
      />

      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />

      <button
        onClick={() => {
          setCorrectAnswer(generateRandomColor());
          setHasGuessed(false);
          setColorGuess('');
        }}
        type={hasGuessed ? 'submit' : 'button'}
      >
        Reset Color
      </button>

    </>);
};

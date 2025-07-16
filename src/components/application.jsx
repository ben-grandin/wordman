import { useState } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import { Game } from './game';

const Application = () => {
  const [ correctAnswer, setCorrectAnswer ] = useState(() => generateRandomColor());

  return (
    <main className="flex flex-col gap-8 mx-auto my-8 w-96">
      <ColorSwatch color={correctAnswer} correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} />
      <Game correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer}/>
      <ExpensiveComponent />
    </main>
  );
};

export default Application;


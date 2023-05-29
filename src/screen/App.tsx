import { Container, Animation } from './App.style';
import { useState, useEffect } from 'react';
import { DisplayTodos } from 'components/DisplayTodos';
import { Todos } from 'components/Todos';
import { appTexts } from 'text';

const FADE_OUT_START = 2000;
const FADE_OUT_DURATION = 1000;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), FADE_OUT_DURATION);
    }, FADE_OUT_START);
  }, []);

  return (
    <div>
      {isLoading && <Animation fadeOut={isFadingOut}>{appTexts.loading}</Animation>}
      {!isLoading && (
        <Container>
          <h1>{appTexts.title}</h1>
          <h2>{appTexts.description}</h2>
          <Todos />
          <DisplayTodos />
        </Container>
      )}
    </div>
  );
};

export default App;

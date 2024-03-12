import { useState } from 'react';

export default function FeedbackFormTwo() {
  const [name, setName] = useState('');

  function handleClick() {
   const newName = (prompt('What is your name?'));
   setName(newName);
    alert(`Hello, ${newName}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}

import { useState } from 'react';

export default function RequestTracker() {
  // pending
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    // setPending(pending - 1);
    setPending(pending => pending - 1);
    // setPending(n => n - 1);
    setCompleted(completed => completed + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}


//#1 Each time the user presses the "Buy" button,
// the "Pending" counter should increase by one.

// Each time the user presses the "Buy" button,
// the "Pending" counter should increase by one.
// After three seconds, the "Pending" counter should decrease,
// and the "Completed" counter should increase.
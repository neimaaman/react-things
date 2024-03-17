export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for (const item of queue) {
      if (typeof item === 'number') {
        finalState += item;
      } else if (typeof item === 'function') {
        finalState = item(finalState);
      }
    }
  
    return finalState;
  }
  
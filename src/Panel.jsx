
import React, { useState } from 'react';

const Panel = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <div>{children}</div>}
    </div>
  );
};

export default Panel;

//It was not provided in the challenge so we used ai to generate it










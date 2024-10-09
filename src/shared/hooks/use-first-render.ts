import React from 'react';

export const useFirstRender = () => {
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  }, []);

  return firstRender.current;
};

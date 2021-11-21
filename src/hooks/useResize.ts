import { useEffect } from 'react';

function useResize(onResize: () => void) {
  useEffect(() => {
    addEventListener('resize', onResize);

    return function cleanUp() {
      removeEventListener('resize', onResize);
    };
  }, [onResize]);
}

export default useResize;

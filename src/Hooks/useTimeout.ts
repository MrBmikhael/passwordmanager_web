import { useEffect, useRef } from 'react'

const useTimeout = (callback: () => void, delay: number, args?: any[]) => {
  const savedCallback = useRef<() => void>()

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current)
        savedCallback.current()
    }

    if (delay !== null) {
      let id = setTimeout(tick, delay, args);
      return () => clearTimeout(id);
    }
  }, [delay]);
};

export default useTimeout
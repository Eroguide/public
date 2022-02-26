import { useEffect, useState } from 'react';

export const useBreakpoint = ({
  min,
  max,
}: {
  min: number;
  max: number;
}): boolean => {
  if (min > max) {
    throw new Error("min can't be grater than max");
  }
  const [isIntersected, setIsIntersected] = useState<boolean>(false);
  const minListener = (e: MediaQueryListEvent) => {
    setIsIntersected(window.innerWidth <= max && e.matches);
  };
  const maxListener = (e: MediaQueryListEvent) => {
    setIsIntersected(window.innerWidth >= min && e.matches);
  };
  const init = () => {
    setIsIntersected(window.innerWidth >= min && window.innerWidth <= max);
  };

  useEffect(() => {
    let minMq: MediaQueryList | undefined;
    let maxMq: MediaQueryList | undefined;
    if (process.browser) {
      init();
      minMq = window.matchMedia(`(min-width: ${min}px)`);
      minMq.addListener(minListener);
      maxMq = window.matchMedia(`(max-width: ${max}px)`);
      maxMq.addListener(maxListener);
    }
    return () => {
      if (minMq) minMq.removeListener(minListener);
      if (maxMq) maxMq.removeListener(maxListener);
    };
  }, [min, max]);

  return isIntersected;
};

import React, { SetStateAction, useEffect, useState } from 'react';

const useVisibilty = (
  ref: React.MutableRefObject<undefined>
): [
  boolean,
  (
    setValue: SetStateAction<any>,
    value: number,
    count?: number | undefined,
    intervalTime?: number | undefined
  ) => void
] => {
  const [isVisible, setIsVisible] = useState(false);

  const getProgress = (
    setValue: SetStateAction<any>,
    value: number,
    count?: number,
    intervalTime?: number
  ) => {
    if (isVisible) {
      const interval = intervalTime || 50;
      const timer = setInterval(() => {
        setValue((oldProgress: number) => {
          const countDiff = count || 10;
          const diff = Math.random() * countDiff;
          return Math.min(oldProgress + diff, value);
        });
      }, interval);

      return () => {
        clearInterval(timer);
      };
    }
  };

  const observer = new IntersectionObserver(([entry]) =>
    setIsVisible(entry.isIntersecting)
  );

  useEffect(() => {
    if (ref?.current) {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return [
    isVisible,
    (
      setValue: SetStateAction<any>,
      value: number,
      count?: number,
      intervalTime?: number
    ) => getProgress(setValue, value, count, intervalTime),
  ];
};

export default useVisibilty;

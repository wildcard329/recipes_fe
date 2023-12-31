import React, { useEffect } from 'react';
import useBool from './useBool';

const useScrollListener = () => {
    const {
      isTruthy: isScrolling,
      setTruthy: setIsScrolling,
      setNotTruthy: setIsNotScrolling,
    } = useBool();

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling();
        setTimeout(() => {
          setIsNotScrolling();
        }, 7000);
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return { isScrolling };
};

export default useScrollListener;

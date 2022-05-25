import React, { useState, useEffect } from 'react';
export const useWindow = () => {
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);

  const xyz = () => {
    setwidth(window.innerWidth);
    setheight(window.innerHeight);
  };

  const abc = () => {
    window.addEventListener('load', xyz);
    window.addEventListener('resize', xyz);
  };

  useEffect(abc, []);
  return {
    width: width,
    height: height,
  };
};

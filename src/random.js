#!/usr/bin/env node
export default (min = 0, max = 100) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum;
  };
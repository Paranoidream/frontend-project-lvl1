const getRandomNumber = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

export default getRandomNumber;

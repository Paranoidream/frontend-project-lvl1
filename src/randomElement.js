const randomElement = (min, max) => {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

export default randomElement;

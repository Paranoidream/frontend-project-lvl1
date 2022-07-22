const randomElement = (min, max) => {
  const floorMax = Math.floor(max);
  const ceilMin = Math.ceil(min);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1) + ceilMin);
};

export default randomElement;

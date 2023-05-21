export const addMorePageNumbers = (array: number[], count: number = 5) => {
  const lastNumber = array[array.length - 1];
  const newElements = [];

  for (let i = 1; i <= count; i++) {
    newElements.push(lastNumber + i);
  }

  const updatedArray = array.concat(newElements);
  const trimmedArray = updatedArray.slice(count); // Remove the first 5 elements

  return [lastNumber,...trimmedArray];
};

export const removeElements = (array: number[], count: number = 5) => {
  if (count >= array.length) {
    return [];
  }

  return array.slice(0, array.length - count);
};
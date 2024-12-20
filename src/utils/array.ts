export const deepClone = <T>(array: T[]): T[] => {
  return JSON.parse(JSON.stringify(array));
};

type ID = string | number

export const findObjectById = <T extends {id:ID}>(id: ID, array: T[] | undefined): T | undefined => {
  return array?.find((itemInArray) => itemInArray.id === id);
};

export const findIndexById = <T extends {id:ID}>(idWithUnknownIndex: ID, array: T[]) :number  => { // T herite de la propriété ID
  return array.findIndex(
    (itemInArray) => itemInArray.id === idWithUnknownIndex
  );
};

export const removeObjectById = <T extends {id:ID}>(idOfItemToRemove: ID, array: T[]): T[] => {
  return array.filter((item) => item.id !== idOfItemToRemove);
};

export const isEmpty = <T>(array: T[]): boolean => {
  return array.length === 0;
};

// const fruits = [{ nom: "Abricot" }, { nom: "Banane" }]
// const fruitsShallowCopy = [...fruits]
// const fruitsDeepCopy = deepClone(fruits)

// //fruitsShallowCopy[1].nom = "Cerise"
// fruitsDeepCopy[1].nom = "Cerise"

// console.log("fruits: ", fruits)
// //console.log("fruitsShallowCopy: ", fruitsShallowCopy)
// console.log("fruitsDeepCopy: ", fruitsDeepCopy)
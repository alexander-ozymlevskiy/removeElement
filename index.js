function removeElement(array, item) {
  const x = array.indexOf(item);
  if (x !== -1) {
    array.splice(x, 1);
  }
}

const array = [1, 2, 3, 4, 5, 6, 99, 0];
removeElement(array, 99);
console.log(array);

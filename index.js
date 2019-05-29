function sumItems(array) {
  let output = 0;
  array.forEach((element) => {
    if (Array.isArray(element)) {
      output += sumItems(element)
    } else {
      output += element
    }
  });
  return output;
}

module.exports = sumItems;
module.exports = function(arr1, arr2) {
  let total = 0;
  let i = 0;
  while (i < 10) {
    total += Math.abs(arr1[i] - arr2[i]);
    i++;
  }
  return total;
};

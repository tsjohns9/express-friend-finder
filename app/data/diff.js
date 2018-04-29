module.exports = function(arr1, arr2) {
  // This function will get used in a .map() inside of apiRoutes.js to compare the current user with every other user
  // arr1 represents a user who already submitted the form. arr2 represents the current user.
  let total = 0;
  let i = 0;

  while (i < 10) {
    total += Math.abs(arr1[i] - arr2[i]);
    i++;
  }

  return total;
};

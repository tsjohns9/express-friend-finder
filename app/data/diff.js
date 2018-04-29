module.exports = function(arr1, arr2) {
  // This function will get used in a .map() inside of apiRoutes.js to compare the current user with every other user
  // arr1 represents a user who already submitted the form. arr2 represents the current user.
  let total = 0;
  let i = 0;

  // compares scores for each question.
  while (i < 10) {
    total += Math.abs(arr1[i] - arr2[i]);
    i++;
  }

  // returns one number representing the current users compatibility score with one other user who submitted the form.
  return total;
};

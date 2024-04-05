/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
      return "";
  }

  // Sort the strings to ensure that the shortest string is at the beginning
  strs.sort();
  // Take the first string as the reference for comparison
  let reference = strs[0];

  // Iterate through the characters of the reference string
  for (let i = 0; i < reference.length; i++) {
      // Check if the character at the current index is the same for all strings
      for (let j = 1; j < strs.length; j++) {
          if (i >= strs[j].length || strs[j][i] !== reference[i]) {
              // If not, return the substring up to the current index
              return reference.substring(0, i);
          }
      }
  }
  // If all characters match up to the length of the reference string, return the whole reference string
  return reference;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

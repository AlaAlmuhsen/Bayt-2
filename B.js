function contains(obj, targetValue) {
   // Base case: if the current object is the target value, return true
   if (obj === targetValue) {
      return true;
   }

   // If the current object is not an object or null, return false
   if (typeof obj !== "object" || obj === null) {
      return false;
   }

   // Iterate through all the properties of the object
   for (let key in obj) {
      // Recursively search through nested objects
      if (contains(obj[key], targetValue)) {
         return true; // If found, return true immediately
      }
   }

   // If the target value was not found in the object or its nested objects, return false
   return false;
}

// Example usage
const nestedObj = {
   a: 1,
   b: {
      c: 2,
      d: {
         e: 3,
         f: 4,
      },
   },
   g: 5,
};

console.log(contains(nestedObj, 3)); // Output: true
console.log(contains(nestedObj, 6)); // Output: false

function isCharUnique(word) {
   const arrayOfChars = word.split("");
   const arrayWithoutDublicates = new Set();

   arrayOfChars.map((char) => arrayWithoutDublicates.add(char));

   if (word.length === arrayWithoutDublicates.size) {
      return true;
   } else {
      return false;
   }

   console.log(word.length);
   console.log(arrayWithoutDublicates.size);
}

console.log(isCharUnique("abc"));

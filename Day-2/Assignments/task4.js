const vowels = ["a", "e", "i", "o", "u"];

const countVowels = (s) => {
  let vowelsCount = 0;
  const string = s.toLowerCase();
  for (let char of string) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  console.log(vowelsCount);
};
countVowels("strawberry");

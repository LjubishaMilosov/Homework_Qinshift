let userPromptInput;
let year;

while (true) {
  userPromptInput = prompt("Enter a year to find its Chinese Zodiac:");
  year = parseInt(userPromptInput);

  if (isNaN(year)) {
    alert("Please enter a valid positive year.");
  } else if (year < 4) {
    alert("This calculator can only calculate the Chinese Zodiac sign for years after 4 AD. Please try again.");
  } else {
    break;
  }
}
  const zodiacCalculatedIndex = (year - 4) % 12;

  let chineseZodiacSign;

  if (zodiacCalculatedIndex === 0) {
    chineseZodiacSign = "Rat";
  } else if (zodiacCalculatedIndex === 1) {
    chineseZodiacSign = "Ox";
  } else if (zodiacCalculatedIndex === 2) {
    chineseZodiacSign = "Tiger";
  } else if (zodiacCalculatedIndex === 3) {
    chineseZodiacSign = "Rabbit";
  } else if (zodiacCalculatedIndex === 4) {
    chineseZodiacSign = "Dragon";
  } else if (zodiacCalculatedIndex === 5) {
    chineseZodiacSign = "Snake";
  } else if (zodiacCalculatedIndex === 6) {
    chineseZodiacSign = "Horse";
  } else if (zodiacCalculatedIndex === 7) {
    chineseZodiacSign = "Goat";
  } else if (zodiacCalculatedIndex === 8) {
    chineseZodiacSign = "Monkey";
  } else if (zodiacCalculatedIndex === 9) {
    chineseZodiacSign = "Rooster";
  } else if (zodiacCalculatedIndex === 10) {
    chineseZodiacSign = "Dog";
  } else if (zodiacCalculatedIndex === 11) {
    chineseZodiacSign = "Pig";
  }

  alert(`The Chinese Zodiac sign for the year ${year} is ${chineseZodiacSign}`);


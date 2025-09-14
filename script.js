// Word list with categories
const words = {
  fruit: ["apple","banana","orange","grape","mango","papaya","cherry","strawberry","blueberry","pineapple","peach","kiwi","melon","watermelon","guava","coconut","lemon","lime","dragonfruit"],
  object: ["chair","table","bottle","phone","laptop","keyboard","pencil","book","mirror","clock","camera","basket","sofa","lamp"],
  colour: ["red","blue","green","yellow","purple","black","white","orange","pink","brown","grey","violet","indigo"],
  animal: ["tiger","lion","elephant","zebra","giraffe","monkey","panda","rabbit","kangaroo","bear","wolf","fox","dog","cat","camel"],
  country: ["india","china","japan","brazil","france","germany","italy","russia","canada","australia","nepal","spain"],
  sport: ["cricket","football","hockey","tennis","golf","volleyball","badminton","basketball","boxing","wrestling","cycling"]
};

// Pick random category and word
let categories = Object.keys(words);
let category = categories[Math.floor(Math.random() * categories.length)];
let word = words[category][Math.floor(Math.random() * words[category].length)];

let guessed = Array(word.length).fill("_");
let attempts = 0;

// Display initial word and hint
document.getElementById("word").textContent = guessed.join(" ");
document.getElementById("hint").textContent = `💡 Hint: The word is a ${category}.`;
document.getElementById("attempts").textContent = `Attempts: ${attempts}`;

// Guess letter function
function guessLetter() {
  const input = document.getElementById("letterInput");
  const letter = input.value.toLowerCase();
  input.value = "";
  attempts++;

  if(letter && word.includes(letter)) {
    for(let i=0; i<word.length; i++){
      if(word[i] === letter) guessed[i] = letter;
    }
    document.getElementById("message").textContent = `✅ Good guess!`;
  } else {
    document.getElementById("message").textContent = `❌ No "${letter}" in the word.`;
  }

  document.getElementById("word").textContent = guessed.join(" ");
  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;

  if(!guessed.includes("_")){
    document.getElementById("message").textContent = `🎉 Congratulations! You guessed "${word}" (a ${category}) in ${attempts} attempts!`;
  }
}

// Restart game button
document.getElementById("restartBtn").addEventListener("click", function() {
  location.reload();
});

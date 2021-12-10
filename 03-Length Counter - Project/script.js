
const calculateCharacter = () => {
  // Write your codes here
let tweet = prompt("Tweetinizi giriniz");
let tweetCount = (tweet.length);
console.log(tweetCount);
let tweetLeft= 150-tweetCount;
console.log(tweetLeft);

// alert("You have written" + tweetCount + "characters you have" + tweetLeft + "charecters remaining.")
console.log("You have written" + tweetCount + "characters you have" + tweetLeft + "charecters remaining.")


}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);

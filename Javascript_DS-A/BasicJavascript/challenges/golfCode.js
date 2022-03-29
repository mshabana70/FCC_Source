// GOLF CODE

// CODING CHALLENGE:
/**
 * If Golf, each hole has a par, meaning the average
 * number of strokes a golfer is expected to make in order 
 * to sink the ball in the holle to complete the play.
 * 
 * There is a nickname depending on far above or below par 
 * you are. 
 * 
 * The function will be passed par and strokes args. Return 
 * the correct string nickname according to num of strokes 
 * above or below par it is.
 */
console.log("/************ GOLF CODE ************/\n");

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= (par - 2)) {
        return names[1];
    } else if (strokes === (par - 1)) {
        return names[2];
    } else if (strokes === (par)) {
        return names[3];
    } else if (strokes === (par + 1)) {
        return names[4];
    } else if (strokes === (par + 2)) {
        return names[5];
    } else {
        return names[6];
    }

    return "Change Me";
  // Only change code above this line
}
// imaginary golfers 
let golfer1 = golfScore(5, 4);
let golfer2 = golfScore(5, 7);
let golfer3 = golfScore(5, 3);
let golfer4 = golfScore(5, 1);
let golfer5 = golfScore(5, 9);

// scorecard array

let scoreCard = [
    ["Golfer 1", golfer1],
    ["Golfer 2", golfer2],
    ["Golfer 3", golfer3],
    ["Golfer 4", golfer4],
    ["Golfer 5", golfer5],
]

console.log("It is a lovely day for golf! Lets check out the score cards from the first hole: " + scoreCard);
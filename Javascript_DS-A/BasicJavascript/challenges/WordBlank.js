// We are building a MadLibs style game in Javascript

/**
 * In a "Mad Libs" game, you are provided sentences
 * with some missing words, like nouns, verbs, 
 * adjectives and adverbs. You then fill in 
 * the missing pieces with words of your choice in 
 * a way that the completed sentence makes sense.
 */

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Form a complete sentence using our variables and concatentation
const wordBlanks = "On Sunday morning, I took my " 
                    + myNoun + 
                    " with me to the park. They were " + 
                    myAdjective + 
                    " but that was no problem for me. They " 
                    + myVerb + " " + myAdverb + 
                    " as we approached the end of the park trail. It was a typical sunday.";

// Return our word blank
console.log(wordBlanks);
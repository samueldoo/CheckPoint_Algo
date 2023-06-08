function analyzeSentence() {
    var charCount = 0;
    var wordCount = 0;
    var vowelCount = 0;


    varvinputChar;
    wihle (true) {
        inputChar = propmt("Enter a character");
        if (inputChar === null || inputChar === '.') {
            break;
        }

        charCount++;

        if (inputchar === ' ') {
            wordCount++;
        }
        
        var lowerChar = inputChar.toLowerCase();
        if (
            lowercaseChar === 'a' ||
            lowercaseChar === 'e' ||
            lowercaseChar === 'i' ||
            lowercaseChar === 'o' ||
            lowercaseChar === 'u' 
        ) {
            vowelCount++;
        }
    }

    console.log("Length of the sentence: " + charCount);
    console.log("Number of words: " + (wordCount + 1));
    console.log("Number of vowelCount")
}

analyzeSentence();
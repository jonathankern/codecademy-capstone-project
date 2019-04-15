const _ = {
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },

    inRange(number, startValue, endValue) {
        // if !endValue, set startValue to 0 and endValue to startValue
        if (endValue === undefined) {
            endValue = startValue;
            startValue = 0;
        }

        // if startValue is larger than endValue, swap values
        if (startValue > endValue) {
            // store temporary endValue var
            let temporaryEndValue = endValue;

            endValue = startValue;
            startValue = temporaryEndValue;
        }

        // check if start is smaller than / equal to num and num < end
        const isInRange = startValue <= number && number < endValue;

        // return value of isInRange var
        return isInRange;

    },

    words(string) {
        // split string into an array of words
        const splitWords = string.split(' ');

        // return value of wordsArray
        return splitWords;
    },

    pad(string, length) {
        // if string length is greater than length, return string
        if(string.length >= length) {
            return string;
        };

        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString =' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

        return paddedString;
    },

    has(object, key) {
        // check if object contains a value at specified key
        // for loop? forEach?
        const hasValue = object[key];

        // return true if object constains a value at the key, else return false
        if (hasValue != undefined) {
            return true;
        }
        return false;
    },

    invert(object) {
        // create new obj
        let invertedObject = {};
        // iterate through each key/value pair
        for (let key in object) {
            const originalValue = object[key];

            // set value at originalValue on invertedObject to be the current key
            invertedObject = {originalValue: key}
        }
        // swap value of key/value

        // return value of invertedObject
        return invertedObject;
    },

    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);

            if (predicateReturnValue) {
                return key;
            };
        };
        undefined
        return undefined;
    },

    drop(array, numberOfItemsToDrop) {
        if (numberOfItemsToDrop === undefined) {
            numberOfItemsToDrop = 1;
        };

        let droppedArray = array.slice(numberOfItemsToDrop, array.length);

        return droppedArray;

    },

    dropWhile(array, predicate) {
        const callback = (element, index) => {
            return !predicate(element, index, array);
        };

        let dropNumber = array.findIndex(callback);
        let droppedArray = this.drop(array, dropNumber);

        return droppedArray;
    },

    chunk(array, size=1) {
        let arrayChunks = [];

        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i+size);

            arrayChunks.push(arrayChunk);
        }

        return arrayChunks;
    }
};



// Do not write or modify code below this line.
module.exports = _;

const _ = {
    words(str) {

        let words = str.split(' ');

        return wrd;
    },

    pad(str, len) {

        if (len < str.length) {
            return str;
        } else {
            var sl = str.length;
            var tp = (len - sl) / 2;
            var startPaddingLength = Math.floor(tp);
            var end = Math.ceil(len - sl - startPaddingLength);
            var paddedString = ' '.repeat(startPaddingLength).concat(str).concat(' '.repeat(end));
            return paddedString;
        }
    },
    has(obj, key) {
        var hasValue = obj[key] == undefined;
        if (hasValue) {
            return false;
        } else return true;
    },
    invert(obj) {
        var invertedObject = {};
        for (const key in obj) {

            invertedObject[obj[key]] = key; // obj[value] = key(property)

        }

        return invertedObject;
    },
    findKey(object, predicate) {

        for (const key in object) {
            var value = object[key];
            var predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }

        }
        return undefined;
    },
    drop(arr, num) {
        if (num == undefined || num == null)
            arr.shift();
        else {
            for (let index = 0; index < num; index++) {
                arr.shift();

            }
        }
        return arr;

    },
    dropWhile(array, predicate) {

        let dropNumber = array.findIndex(function (element, index) {
            return !(predicate(element, index, array))

        });
        let droppedArray = this.drop(array, dropNumber)
        return droppedArray
    },
    chunk(array, size) {
        if (size == undefined) {
            size = 1;
        }
        var emptyArr = [];
        for (let index = 0; index <= array.length - 1; index = index + size) {

            var arrayChunk = array.slice(index, (index + size));
            emptyArr.push(arrayChunk);
        }
        return emptyArr;
    }

};

const courses = {
    java: 10,

    javascript: 55,

    nodejs: 5,

    php: 15,
    language: {
        lan: "Java",
        lan1: "JS",
        isActive: true
    }
};



// const
//     isStrictEqual = a => b => a === b;
//     object = { a: 'foo', b: 'bar', c: 'baz' };
// console.log(_.findKey(object,isStrictEqual("bar")))


const arr = [1, 2, 3, 4];
// console.log(_.drop(arr,2));

// dropwhile test

//console.log(_.dropWhile(arr, (a) => a === 2));
console.log(_.chunk(arr, 3));
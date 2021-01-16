//          94-85

//          1


const randItem = arr => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(randItem(arr), '\n');


//          2


const obj = {
    logger(a) {
        console.log(a);
    },
    fn2() {},
    fn3: () => {},
};

const funcs = obj => {
    const arr = [];
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            arr.push(key);
        }
    }
    return arr;
};

console.log(funcs(obj), '\n');


//          3


const shuffle = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        const index = Math.floor(Math.random() * (arr.length - i) + i);
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
};

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffle(arr1);
console.log(arr1, '\n');


//          4


const replaceString = (where, what, onWhat) => {
    let result = where;
    if (where.includes(what)) {
        const index = where.indexOf(what);
        const length = what.length;
        result = where.slice(0, index) + onWhat + where.slice(index + length);
        return replaceString(result, what, onWhat);
    }
    return result;
};

const str = 'ngryshchak@ukr.net';
console.log(replaceString(str, 'ukr.net', 'gmail.com'));


//          5


const firstElements = (arg, n) => arg.slice(0, n);

//console.log(firstElements([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4));


//          6


const splitArr = (arr1, n) => {
    let res = [], arr = arr1;
    const a = Math.floor(arr.length / n);
    for (let i = 0; i < n - 1; i++) {
        res.push(arr.splice(0, a));
    }
    res.push(arr);
    return res;
};

//console.log(splitArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));


//          7


const filter = (arr, callback) => {
    let res = [];
    for (const i of arr) {
        if (callback(i, arr.indexOf(i), arr)) {
            res.push(i);
        }
    }
    return res;
};

//console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], x => x % 2 === 0));

const find = (arr, callback) => {
    for (const i of arr) {
        if (callback(i, arr.indexOf(i), arr)) return i;
    }
    return undefined;
};

const func = x => x % 9 === 0;
const arrr = [1, 4, 9, 16, 25, 36];
console.log(find(arrr, func));


//          8


const some = (arr, callback) => {
    for (const i of arr) {
        if (callback(i, arr.indexOf(i), arr)) return true;
    }
    return false;
};

const every = (arr, callback) => {
    for (const i of arr) {
        if (!callback(i, arr.indexOf(i), arr)) return false;
    }
    return true;
};

console.log(every(arrr, x => ((x ** 0.5) ^ 0) === x ** 0.5));
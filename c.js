//          84-75

//          1


const check = str => {
    const word = str.trim().toLowerCase();
    const reversed = word.split('').reverse().join('');
    if (word === reversed) return true;
    return false;
};

const str = 'Rotator';
if (check(str)) console.log(str, 'is polindrom\n');
else console.log(str, 'isn\'t polindrom\n');


//          2


const merge = (...arrays) => {
    const res = [];
    for (const arr of arrays) {
        res.push(arr);
    }
    return res.flat();
};

console.log(merge([1, 2, 3], [4, 5, 6], [7, 8, 9]));

//          100-95

//          1


const types = arr => {
    const obj = {};
    for (const i of arr) {
        obj[typeof i] = obj[typeof i] + 1 || 1;
    }
    return obj;
};

const arr = [1, 2, 3, 'a', 'b', 'c', [1], {a: 2}, true, false, (x) => x, undefined];
console.log(types(arr), '\n');


//          2


const obj = {
    a: 2,
    b: 3,
    logger() {
        console.log(this);
    },
    keys() {
        return Object.keys(this);
    },
    values(){
        return Object.values(this);
    },
    brother: {
        name: 'human',
        age: 20000,
        place: 'Earth',
        country: {
            name: 'Ukraine',
            year: '1991',
            in: 'yes',
        },
    },
};

const cloneObj = (obj) => {
    const clone = {};
    for (const i in obj) {
        if (typeof obj[i] === 'object') {
            clone[i] =  cloneObj(obj[i]);
        }
        else clone[i] = obj[i];
    }
    return clone;
};
const clone = cloneObj(obj);
clone.brother.country.in = 'no';
console.log(obj, clone, '\n');


//          3


class Person {
    static count = 0;
    constructor(firstName, lastName, city, born, number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.born = born;
        this.number = number;
        Person.count++;
    }
    getAge() {
        return 2021 - this.born;
    }
}

const nikita = new Person('Nikita', 'Gryshchak', 'Zhytomyr', 2003, '+380932122593');
const egor = new Person('Egor', 'Gryshchak', 'Zhytomyr', 2011);
const a = new Person('anonimus');

console.log(nikita, egor, a, Person.count);


//          4


class Obj {
    constructor(){
        this.exist = true;
    }
    add(key, value) {
        this[key] = value;
    }
}

const obj1 = new Obj();
obj1.add('a', 2);
console.log(obj1, '\n');


//          5


const obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};
Object.defineProperty(obj2, 'map1', {
    enumerable: false,
    value: function(func) {
        const newObj = {};
        for (const i in obj2) {
            newObj[i] = func(obj2[i]);
        }
        return newObj;
    },
});

console.log(obj2.map1(x => x ** 2));

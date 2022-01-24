// Object.structuredClone() method

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 4,
        f: 5
    }
};

let shallowCopy = Object.assign({}, obj);
let shallowCopy2 = {...obj};
let shallowCOpy3 = JSON.parse(JSON.stringify(obj));

// deep copy
let obj2 = Object.structuredClone(obj);


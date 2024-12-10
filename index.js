const a = {
    nested: {value: 10}
}

const b = {};
Object.assign(b,a)

b.nested.value = 20;

console.log(a)
console.log(b)
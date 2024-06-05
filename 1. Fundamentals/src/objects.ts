const input: string = "";

const user = {
    name : input ? input : "default user0"
}

console.log(user.name); // default user0 will be printed

const propName = "foo";

// dynamic object key
const obj = {
    [propName]: 123
};

// spread syntax
const obj1 = {
    bar: 456,
    baz: 789
};

const obj2 = {
    foo2: 123,
    ...obj
};

// Copy the object explicitly
const foo = {num: 1234};
const bar = {...foo}; 
// ... is called spread operator. when copying a nested object, 
// nested object will not be copied. It still refers to the same object.
console.log(bar.num);
bar.num = 0;
console.log(foo.num);

const bax = {num: 1234};
console.log(foo === bax);

// object types
const obj3 : {
    foo: number,
    bar: string
} = {
    foo: 123,
    bar: "Hello world!"
};

// Type you can rename any data type with type. 
type FooBarObj = {
    foo: Number,
    bar: string
};

const foobarobj: FooBarObj = {
    foo: 123,
    bar: "HH"
};

// Interface is another way to create types to objects. 
interface AA {
    foo: number,
    bar: string
}

const aa: AA = {
    foo: 0,
    bar: "string"
};

/*
Index signature: it accepts any name as a key. Quite Old feature: can be replaced with Map function
Index signature can destroy type-safety feature TypeScript provides.
Index Signature can access to any properties even if they do not exist.
Use wisely!!!!
*/
type PriceData = {
    [key: string]: number;
}

const data: PriceData = {
    apple: 220,
    coffee: 120,
    bento: 500
};

// This case objj does not hold a property bar but it will compile.
type MyObj = {[key: string]: number};
const objj: MyObj = {foo: 123};
const num: number = objj.bar; // undefined. It is not number.
console.log(num);

// propName1 does not hold an arbitraty property name. it has foo.
const propName1: string = "foo";

const aaa = {
    [propName1]: 123
};

console.log(aaa.foo);

/**
 * Declare optinoal properties in objects
 * Read only properties
 */
type MyObj2 = {
    foo: boolean,
    readonly bar: boolean,
    baz?: number
}

const myobj21 = {foo: true, bar: true, baz: 123};
    if (myobj21.baz !== undefined) {
        console.log(myobj21.baz * 1000);
}

/**
 * Typeof keyword: useful when using data structures having been defined again!
 */
const numType: number = 0;
type T = typeof numType;
const num3: T = 123;

/**
 * Subtyping Relation
 */

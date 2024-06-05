const message: string = "Hello, world!";
// TypeScript uses IEEE 754 floating-point arithmetic standard
// 64 bits (Mantissa 52 bits, Exponent 11 bits, Sign 1 bit)
const million: number = 1_000_000;
console.log(9007199254740992);
console.log(0.1 + 0.2); // 3.00000000000004

console.log(message); // to generate a js file, type "npx tsc"

/**
 * BitInt
 * 
 * BigInt represents arbitrary precision. It is used as much space as
 * needed to save the whole value.
 */
const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);
const bigint2: bigint = BigInt("1340");
// Error: const bigint3: bigint = BigInt("charo");

const secret = process.env.SECRET ?? "default";

console.log(`Secretは${secret}です`);



type Boolian = (arg0: any, arg1: any) => any;

const troo = (a: any, b: any) => {
  return a;
};
const fols = (a: any, b: any) => {
  return b;
};

// logic

const not = (b: Boolian) => {
  return b(fols, troo);
};

console.log(not(troo) == fols);
console.log(not(fols) == troo);

const and = (b: Boolian, a: Boolian) => {
  return a(troo, fols), b(a, fols);
};

console.log(and(troo, troo) == troo);
console.log(and(troo, fols) == fols);
console.log(and(fols, troo) == fols);
console.log(and(fols, fols) == fols);

const or = (b: Boolian, a: Boolian) => {
  return b(troo, fols), a(troo, b);
};

console.log(or(troo, troo) == troo);
console.log(or(troo, fols) == troo);
console.log(or(fols, troo) == troo);
console.log(or(fols, fols) == fols);

const eef = (b: Boolian, func1: any, func2: any) => {
  return b(func1, func2);
};

const funkcia1 = () => {
  return "funckia 1";
};
const funkcia2 = () => {
  return "funckia 2";
};

console.log(eef(fols, funkcia1(), funkcia2()));
console.log(eef(troo, funkcia1(), funkcia2()));

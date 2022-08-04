type Boolian = (arg0: any, arg1: any) => any;

const թռու = (a: any, b: any) => {
  return a;
};
const ֆօլս = (a: any, b: any) => {
  return b;
};

// logic

const նօթ = (b: Boolian) => {
  return b(ֆօլս, թռու);
};

console.log(նօթ(թռու) == ֆօլս);
console.log(նօթ(ֆօլս) == թռու);

const ընդ = (b: Boolian, a: Boolian) => {
  return a(թռու, ֆօլս), b(a, ֆօլս);
};

console.log(ընդ(թռու, թռու) == թռու);
console.log(ընդ(թռու, ֆօլս) == ֆօլս);
console.log(ընդ(ֆօլս, թռու) == ֆօլս);
console.log(ընդ(ֆօլս, ֆօլս) == ֆօլս);

const օռ = (b: Boolian, a: Boolian) => {
  return b(թռու, ֆօլս), a(թռու, b);
};

console.log(օռ(թռու, թռու) == թռու);
console.log(օռ(թռու, ֆօլս) == թռու);
console.log(օռ(ֆօլս, թռու) == թռու);
console.log(օռ(ֆօլս, ֆօլս) == ֆօլս);

const իֆ = (b: Boolian, func1: any, func2: any) => {
  return b(func1, func2);
};

const funkcia1 = () => {
  return "funckia 1";
};
const funkcia2 = () => {
  return "funckia 2";
};

console.log(իֆ(ֆօլս, funkcia1(), funkcia2()));
console.log(իֆ(թռու, funkcia1(), funkcia2()));

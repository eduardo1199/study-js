const student_1 = {
  name: 'Eduardo',
  year: 22,
  registration: 23151651
}

const entries = Object.entries(student_1).map(([key, value]) => {
  return {
    key, 
    value
  }
})

const entriesMap = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const data = '15-05-2022';

const obj = Object.fromEntries(entriesMap);

console.log(obj);
console.log(Array.from(student_1))
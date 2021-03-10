import faker from 'faker'

const bigList = [...Array(50)].map(() => ({
  name: faker.name.findName(),
  country: faker.address.country(),
  age: faker.phone.phoneNumber(),
  id: faker.random.number()
}));

export default bigList

// export default [
//   { name: "shaurya", age: 23, country: "USA" },
//   { name: "Sam", age: 26, country: "India" },
//   { name: "Rishu", age: 32, country: "USA" },
//   { name: "Ishpita", age: 21, country: "Austrailia" },
//   { name: "Ben Cuttings", age: 45, country: "Sri lanka" },
//   { name: "Dario", age: 23, country: "Italy" },
// ];

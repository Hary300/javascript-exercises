const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const oldestYearOfDeath = oldest.yearOfDeath
      ? oldest.yearOfDeath
      : new Date(Date.now()).getFullYear();

    const personYearOfDeath = person.yearOfDeath
      ? person.yearOfDeath
      : new Date(Date.now()).getFullYear();

    const personAge = personYearOfDeath - person.yearOfBirth;
    const oldestAge = oldestYearOfDeath - oldest.yearOfBirth;

    return oldestAge > personAge ? oldest : person;
  });
};

// const people = [
//   {
//     name: 'Carly',
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: 'Ray',
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: 'Jane',
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

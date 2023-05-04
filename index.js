const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    age:45,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    age:20,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    age:25,
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    age:33,
    eye_color: "blue",
    gender: "male",
  },
]
const Name = "Leia Organa";

const character = characters.find((char) => char.name === Name);

if (character) {
  console.log(`${character.name} has been found. age: ${character.age}. eye Color: ${character.eye_color}`);
} else {
  console.log(`${Name} was not found.`);
}

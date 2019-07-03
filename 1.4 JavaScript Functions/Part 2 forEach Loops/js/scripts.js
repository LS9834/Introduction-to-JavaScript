//Task 3.Creating a pokemons array to hold pokemons data
var repository = [
  {
    name: "Charmander",
    height: 0.6,
    types: ["fire"]
  },
  {
    name: "Golbat",
    height: 1.6,
    types: ["poison"]
  },
  {
    name: "Alakazam",
    height: 1.5,
    types: ["psychic"]
  },
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "dirt"]
  },
  {
    name: "Squirtle",
    height: 0.5,
    types: ["water"]
  }
];

//Bonus Task 1.Checking each pokemon type and giving a uniqe color to each type
for (var i = 0; i < repository.length; i++) {
  var result;
  for (var j = 0; j < repository[i].types.length; j++) {
    if (repository[i].types[j] == "grass") {
      result = '<span style="color:green;"> ';
    } else if (repository[i].types[j] == "fire") {
      result = '<span style="color:red;"> ';
    } else if (repository[i].types[j] == "psychic") {
      result = '<span style="color:orange;"> ';
    } else if (repository[i].types[j] == "poison") {
      result = '<span style="color:rgb(106, 42, 106);"> ';
    } else if (repository[i].types[j] == "water") {
      result = '<span style="color:blue;"> ';
    }
  }

  //Task 6.Checking the size of each pokemon.
  var size;
  if (repository[i].height > 1) {
    size = "Wow, that’s big!";
  } else {
    size = "Is a small";
  }

  //Task 4.Display pokemons keys and values
  document.write(
    '<div class = "box">' +
      repository[i].name +
      " " +
      "(Height: " +
      repository[i].height +
      "m" +
      ")" +
      "<br>" +
      repository[i].types +
      "<br>" +
      result +
      "<br>" +
      size +
      "</div>" +
      "<br>"
  );
}

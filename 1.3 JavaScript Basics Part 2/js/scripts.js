repository = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"]
  },
  {
    name: "Charmander",
    height: 0.6,
    types: ["fire"]
  },
  {
    name: "Golbat",
    height: 1.6,
    types: ["flying", "poison"]
  },
  {
    name: "Alakazam",
    height: 1.5,
    types: ["psychic"]
  }
];

for (var i = 0; i < repository.length; i++) {
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
      size +
      "</div>" +
      "<br>"
  );
  var size;
  if (repository[i].height > 1) {
    size = "Wow, that’s big!";
  } else {
    size = "Is a small";
  }
}

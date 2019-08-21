var repository = [
  { name: "Bulbasaur", height: 0.7, types: ["grass"] },
  { name: "Charmander", height: 0.6, types: ["fire"] },
  { name: "Golbat", height: 1.6, types: ["flying", "poison"] },
  { name: "Alakazam", height: 1.5, types: ["psychic"] }
];

for (var item = 0; item < repository.length; item++) {
  var size;
  if (repository[item].height > 1) {
    size = "Wow, that’s big!";
  } else {
    size = "It's small pokemon";
  }

  var result;
  for (var typeItem = 0; typeItem < repository[item].types.length; typeItem++) {
    if (repository[item].types[typeItem] == "grass") {
      result = '<span style="color:green;"> ';
    } else if (repository[item].types[typeItem] == "fire") {
      result = '<span style="color:red;"> ';
    } else if (repository[item].types[typeItem] == "psychic") {
      result = '<span style="color:yellow;"> ';
    } else if (repository[item].types[typeItem] == "poison") {
      result = '<span style="color:rgb(106, 42, 106);"> ';
    }
  }
  document.write(
    '<div class="box">' +
      repository[item].name +
      "(height: " +
      repository[item].height +
      "m" +
      ")" +
      "<br>" +
      size +
      result +
      "<br>" +
      repository[item].types +
      "<br>" +
      "</div>"
  );
}

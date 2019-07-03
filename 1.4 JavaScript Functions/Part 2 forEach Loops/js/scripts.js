var repository = [
  { name: "Bulbasaur", height: 0.7, types: ["grass"] },
  { name: "Charmander", height: 0.6, types: ["fire"] },
  { name: "Golbat", height: 1.6, types: ["flying", "poison"] },
  { name: "Alakazam", height: 1.5, types: ["psychic"] }
];

repository.forEach(function(item) {
  // for (var item = 0; item < repository.length; item++) {
  var size;
  if (item.height > 1) {
    size = "Wow, that’s big!";
  } else {
    size = "It's small pokemon";
  }

  var result;
  item.types.forEach(function(typeItem) {
    // for (var typeItem = 0; typeItem < repository[item].types.length; typeItem++) {
    if (typeItem == "grass") {
      result = '<span style="color:green;"> ';
    } else if (typeItem == "fire") {
      result = '<span style="color:red;"> ';
    } else if (typeItem == "psychic") {
      result = '<span style="color:yellow;"> ';
    } else if (typeItem == "poison") {
      result = '<span style="color:rgb(106, 42, 106);"> ';
    }
  });
  document.write(
    '<div class="box">' +
      item.name +
      "(height: " +
      item.height +
      "m" +
      ")" +
      "<br>" +
      size +
      result +
      "<br>" +
      item.types +
      "<br>" +
      "</div>"
  );
});

  var repository = [
    { name: "Bulbasaur", height: 0.7, types: ["grass"] },
    { name: "Charmander", height: 0.6, types: ["fire"] },
    { name: "Golbat", height: 1.6, types: ["flying", "poison"] },
    { name: "Alakazam", height: 1.5, types: ["psychic"] }
  ];

  

repository.forEach(function(item) {
  var size;
  if (item.height > 1.5) {
    size = "Wow, that’s big!";
  } else if (item.height > 1 && item.height < 1.6) {
    size = "It's teen pokemon";
  } else if (item.height < 1.5) {
    size = "It's small pokemon";
  }

  var result;
  item.types.forEach(function(typeItem) {
    if (typeItem == "grass") {
      result = '<span style="color:green;"> ';
    } else if (typeItem == "fire") {
      result = '<span style="color:red;"> ';
    } else if (typeItem == "electric") {
      result = '<span style="color:yellow;"> ';
    } else if (typeItem == "poison") {
      result = '<span style="color:rgb(106, 42, 106);"> ';
    } else if (typeItem == "psychic") {
      result = '<span style="color:orange;"> ';
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
console.log(pokemonRepository);

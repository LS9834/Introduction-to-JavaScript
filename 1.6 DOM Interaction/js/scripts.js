var pokemonRepository = (function() {
  var repository = [
    { name: "Bulbasaur", height: 0.7, types: ["grass"] },
    { name: "Charmander", height: 0.6, types: ["fire"] },
    { name: "Golbat", height: 1.6, types: ["flying", "poison"] },
    { name: "Alakazam", height: 1.5, types: ["psychic"] }
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon = {}) {
    var pokemonList = document.querySelector(".pokemon-list");
    var $listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("my-class");
    $listItem.appendChild(button);
    pokemonList.appendChild($listItem);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(item) {
  var size;
  if (item.height > 1) {
    size = "Wow, that’s big!";
  } else {
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
  pokemonRepository.addListItem(item);
});

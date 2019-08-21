var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("add an object");
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      var $row = $(".row");

      var $card = $('<div class="card" style="width:400px"></div>');
      var $image = $(
        '<img class="card-img-top" alt="Card image" style="width:20%" />'
      );
      $image.attr("src", pokemon.imageUrlFront);
      var $cardBody = $('<div class="card-body"></div>');
      var $cardTitle = $("<h4 class='card-title' >" + pokemon.name + "</h4>");
      var $seeProfile = $(
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Profile</button>'
      );

      $row.append($card);
      //Append the image to each card
      $card.append($image);
      $card.append($cardBody);
      $cardBody.append($cardTitle);
      $cardBody.append($seeProfile);

      $seeProfile.on("click", function(event) {
        showDetails(pokemon);
      });
    });
  }
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
      showModal(item);
    });
  }
  function loadList() {
    return $.ajax(apiUrl)
      .then(function(json) {
        json.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return $.ajax(url)
      .then(function(details) {
        // Now we add the details to the item
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        //loop for each ofthe pokemon types.
        //Also changing the background color depend on each pokemon type.
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        if (item.types.includes("grass")) {
          $(".modal-body").css("background-color", "lightgreen");
          // $listItem.css("background-color", "lightgreen");
          // $(this).css('color', 'red');
        } else if (item.types.includes("fire")) {
          $(".modal-body").css("background-color", "red");
        } else if (item.types.includes("psychic")) {
          $(".modal-body").css("background-color", "#FF69B4");
        } else if (item.types.includes("poison")) {
          $(".modal-body").css("background-color", "purple");
        } else if (item.types.includes("water")) {
          $(".modal-body").css("background-color", "blue");
        } else if (item.types.includes("bug")) {
          $(".modal-body").css("background-color", "#3f000f");
        } else if (item.types.includes("rock")) {
          $(".modal-body").css("background-color", "#BC8F8F");
        } else if (item.types.includes("flying")) {
          $(".modal-body").css("background-color", "#2F4F4F");
        } else if (item.types.includes("electric")) {
          $(".modal-body").css("background-color", "gold");
        } else if (item.types.includes("ice")) {
          $(".modal-body").css("background-color", "#4169E1");
        } else if (item.types.includes("ghost")) {
          $(".modal-body").css("background-color", "#8B008B");
        } else if (item.types.includes("ground")) {
          $(".modal-body").css("background-color", "#D2B48C");
        } else if (item.types.includes("fairy")) {
          $(".modal-body").css("background-color", "#EE82EE");
        } else if (item.types.includes("steel")) {
          $(".modal-body").css("background-color", "#708090");
        }
        //loop to get the abilities of a selected pokemon
        item.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }

        item.weight = details.weight;
      })
      .catch(function(e) {
        console.error(e);
      });
  }
  // show the modal content
  function showModal(item) {
    var modalBody = $(".modal-body");
    var modalTitle = $(".modal-title");
    // var $modalContainer = $("#modal-container");
    //clear existing content of the model
    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal content
    var nameElement = $("<h1>" + item.name + "</h1>");
    // // creating img in modal content
    var imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", item.imageUrlFront);
    var imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", item.imageUrlBack);
    // //creating element for height in modal content
    var heightElement = $("<p>" + "height : " + item.height + "</p>");
    // //creating element for weight in modal content
    var weightElement = $("<p>" + "weight : " + item.weight + "</p>");
    // //creating element for type in modal content
    var typesElement = $("<p>" + "types : " + item.types + "</p>");
    // //creating element for abilities in modal content
    var abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
    // hideModal: hideModal
  };
})();
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//Declaring each shop in a seperate object

        var blueStar = {
          name: "Blue Star",
          minCust: 8,
          maxCust: 43,
          perCust: 4.5,
          hrsOpen: 11
        };

        var voodoo = {
          name: "Voodoo",
          minCust: 4,
          maxCust: 37,
          perCust: 2,
          hrsOpen: 24
        };

        var cosco = {
          name: "Cosco",
          minCust: 9,
          maxCust: 23,
          perCust: 6.33,
          hrsOpen: 11
        };

        var tonalis = {
          name: "Tonallis Donuts & Cream",
          minCust: 2,
          maxCust: 28,
          perCust: 1.25,
          hrsOpen: 17
        };

        var sesame = {
          name: "Sesame Donuts",
          minCust: 8,
          maxCust: 58,
          perCust: 3.75,
          hrsOpen: 24
        };

//Push shops into an array that can be looped through
        var shops = new Array();
        shops.push(blueStar);
        shops.push(voodoo);
        shops.push(cosco);
        shops.push(tonalis);
        shops.push(sesame);

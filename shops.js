//Creating a donut shop object constructor

  var createShop = function(name, minCust, maxCust, perCust, hrsOpen) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.perCust = perCust;
    this.hrsOpen = hrsOpen;
    this.getCustPerHour = function() {
      var perHour = [];
      for(counter = 0; counter < this.hrsOpen;counter++){
          perHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
        };
        return perHour;
    }
    this.donutsPerHour = Math.ceil(this.custPerHour * this.perCust);

  }

//Adding specific shop data and pushing into an array that can be looped through

  var shops = new Array();
      shops.push(new createShop("Blue Star", 8, 43, 4.5, 11));
      shops.push(new createShop("Voodoo", 4, 37, 2, 24));
      shops.push(new createShop("Cosco", 9, 23, 6.33, 11));
      shops.push(new createShop("Tonallis Donuts", 2, 28, 1.25, 17));
      shops.push(new createShop("Sesame", 8, 58, 3.75, 24));

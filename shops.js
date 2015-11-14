//Creating a donut shop object constructor

  var createShop = function(name, minCust, maxCust, perCust, hrsOpen) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.perCust = perCust;
    this.hrsOpen = hrsOpen;
    this.custPerDay = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);

    this.donutsPerDay = Math.ceil(this.custPerDay * this.perCust);

    this.writeTableData = function() {
        var tableRow = "<tr><td>" + this.name + "</td>";
        tableRow += "<td>" + this.minCust + "</td>";
        tableRow += "<td>" + this.maxCust + "</td>";
        tableRow += "<td>" + this.perCust + "</td>";
        tableRow += "<td>" + this.hrsOpen + "</td>";
        tableRow += "<td>" + this.custPerDay + "</td>";
        tableRow += "<td>" + this.donutsPerDay + "</td></tr>";
        return tableRow;
    };

  }

//Adding specific shop data and pushing into an array that can be looped through

  var shops = new Array();
      shops.push(new createShop("Blue Star", 8, 43, 4.5, 11));
      shops.push(new createShop("Voodoo", 4, 37, 2, 24));
      shops.push(new createShop("Cosco", 9, 23, 6.33, 11));
      shops.push(new createShop("Tonallis Donuts", 2, 28, 1.25, 17));
      shops.push(new createShop("Sesame", 8, 58, 3.75, 24));

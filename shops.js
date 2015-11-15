    //Creating a donut shop object constructor
var createShop = function(name, minCust, maxCust, perCust, hrsOpen) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.perCust = perCust;
    this.hrsOpen = hrsOpen;

    this.writeTableData = function() {
      var tableData = "<h2>" + this.name + "</h2>";
      tableData += "<table><tr>";
      tableData += "<th>Min Customer</th>";
      tableData += "<th>Max Customer</th>";
      tableData += "<th>Avg Donut/Customer</th>";
      tableData += "</tr></tr>";
      tableData += "<td>" + this.minCust + "</td>";
      tableData += "<td>" + this.maxCust + "</td>";
      tableData += "<td>" + this.perCust + "</td></tr>";
      tableData += "<tr><th>Hour</th>";
      tableData += "<th>Number of Customers</th>";
      tableData += "<th>Donuts Sold</th></tr>";
      return tableData;
    };

    //Calculate and store hours, customers each hour, donuts to make each hour
    this.perHour = function() {
        var totalCust = 0;
        var totalDonuts = 0;

        for(counter = 0; counter < this.hrsOpen; counter++) {
          //hour number
          var hour = counter+1
          //random number of customers per hour
          var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
          totalCust= totalCust+numCust;
          //number of donuts per hour
          var numDonut = Math.ceil(numCust * this.perCust);
          totalDonuts += numDonut;
          //write data to tables
          document.write("<tr><td>" + hour+"</td><td>"+numCust+"</td><td>"+ numDonut + "</td></tr>");
        }
        document.write("<tr><th>Total</hd>");
        document.write("<th>"+totalCust+"</th>");
        document.write("<th>"+totalDonuts+"</th></tr>");
    };
  }

//Adding specific shop data and pushing into an array that can be looped through

  var shops = new Array();
      shops.push(new createShop("Blue Star", 8, 43, 4.5, 11));
      shops.push(new createShop("Voodoo", 4, 37, 2, 24));
      shops.push(new createShop("Cosco", 9, 23, 6.33, 11));
      shops.push(new createShop("Tonallis Donuts & Cream", 2, 28, 1.25, 17));
      shops.push(new createShop("Sesame", 8, 58, 3.75, 24));

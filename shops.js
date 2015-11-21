    //Creating a donut shop object constructor
var createShop = function(name, minCust, maxCust, perCust, hrsOpen) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.perCust = perCust;
    this.hrsOpen = hrsOpen;

    this.writeTableData = function(index) {
      var tableData = "<div id = " + 'table' + index + " class = 'hide'>";
      tableData +="<h2>" + this.name + "</h2>";
      tableData += "<table><tr>";
      tableData += "<th>Min Customer</th>";
      tableData += "<th>Max Customer</th>";
      tableData += "<th>Avg Donut/Customer</th>";
      tableData += "</tr></tr>";
      tableData += "<td><input type='number' name='minCust' onChange=updateInfo("+ index +") value= "+this.minCust+"></td>";
      tableData += "<td><input type='number' name='maxCust' onChange=updateInfo("+ index +") value=" +this.maxCust+"></td>";
      tableData += "<td><input type='number' name='perCust' onChange=updateInfo("+ index +") value=" +this.perCust+"></td></tr>";
      tableData += "<tr><th>Hour</th>";
      tableData += "<th>Number of Customers</th>";
      tableData += "<th>Donuts Sold</th></tr>";
      return tableData;
    };

    /*Calculate and store hours, customers each hour, donuts to make each hour*/
    this.perHour = function(index) {
        var totalCust = 0;
        var totalDonuts = 0;
        var secondaryTableData = '';

        for(counter = 0; counter < this.hrsOpen; counter++) {
            /*hour number*/
            var hour = counter+1
            /*random number of customers per hour*/
            var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            totalCust= totalCust+numCust;
            /*number of donuts per hour*/
            var numDonut = Math.ceil(numCust * this.perCust);
            totalDonuts += numDonut;
            /*write data to tables*/
            secondaryTableData += "<tr><td>" + hour+"</td><td>"+numCust+"</td><td>"+ numDonut + "</td></tr>";
        }

        secondaryTableData+= "<tr><th><input type='number' name='hrsOpen' onChange=updateInfo("+ index +") value= "+this.hrsOpen+"></th>";
        secondaryTableData+="<th>"+totalCust+"</th>";
        secondaryTableData+="<th>"+totalDonuts+"</th></tr>";
        return secondaryTableData;
    };

  }

/***Show the selected shop information and hide all others***/
  function showShop(selectedShop) {
    /* Grab all Div elements that contain the tables */
    var tables = document.getElementsByTagName('div');
    for(index = 0 ; index < tables.length; index++ ) {
        var currentTable = document.getElementById('table' + index);
        if (('table' + selectedShop) === currentTable.id) {
          currentTable.setAttribute("class", "show");
        }
        else {
          currentTable.setAttribute("class", "hide");
        }
    }
  }
/***Prompts the table info to update when the user changes minCust, maxCust, perCust***/
  function updateInfo(index) {
    /*get new input value and store it in a variable */
    var newMinCust = parseInt(document.getElementsByName('minCust')[index].value);
    var newMaxCust = parseInt(document.getElementsByName('maxCust')[index].value);
    var newPerCust = parseFloat(document.getElementsByName('perCust')[index].value);
    var newHrsOpen = parseInt(document.getElementsByName('hrsOpen')[index].value);
      /**Checks hrs open to make sure it's between 1-24**/
          if ((newHrsOpen > 24) || (newHrsOpen <= 0)) {
             /*Throw an error message*/
            alert("Please enter a number between 1 and 24.");
            document.getElementsByName('hrsOpen')[index].value = shops[index].hrsOpen;
          }
          else {
            /*pass the new input value into this instance for the correct shop*/
            shops[index].minCust = newMinCust;
            shops[index].maxCust = newMaxCust;
            shops[index].perCust = newPerCust;
            shops[index].hrsOpen = newHrsOpen;
            /*Redraw the table*/
            var displayTable = document.getElementById('table' + index);
            displayTable.innerHTML = writeNewInfo(index)
            + shops[index].perHour(index) + "</table></div>";
          }
  }
  /****Updates the innerHTML for the minCust, maxCust, perCust change ***/
  function writeNewInfo(index) {
      var tableData ="<h2>" + shops[index].name + "</h2>";
      tableData += "<table><tr>";
      tableData += "<th>Min Customer</th>";
      tableData += "<th>Max Customer</th>";
      tableData += "<th>Avg Donut/Customer</th>";
      tableData += "</tr></tr>";
      tableData += "<td><input type='number' name='minCust' onChange=updateInfo("+ index +") value= "+shops[index].minCust+"></td>";
      tableData += "<td><input type='number' name='maxCust' onChange=updateInfo("+ index +") value=" +shops[index].maxCust+"></td>";
      tableData += "<td><input type='number' name='perCust' onChange=updateInfo("+ index +") value=" +shops[index].perCust+"></td></tr>";
      tableData += "<tr><th>Hour</th>";
      tableData += "<th>Number of Customers</th>";
      tableData += "<th>Donuts Sold</th></tr>";
      return tableData;
    }

/***Adding specific shop data and pushing into an array that can be looped through***/

  var shops = new Array();
      shops.push(new createShop("Blue Star", 8, 43, 4.5, 11));
      shops.push(new createShop("Voodoo", 4, 37, 2, 24));
      shops.push(new createShop("Coco", 9, 23, 6.33, 11));
      shops.push(new createShop("Tonallis Donuts & Cream", 2, 28, 1.25, 17));
      shops.push(new createShop("Sesame", 8, 58, 3.75, 24));

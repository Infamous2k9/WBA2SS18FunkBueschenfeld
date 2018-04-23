var fs = require('fs');
const chalk = require('chalk');


fs.readFile(__dirname+"/staedte.json", function(err, data){
  var json_object = JSON.parse(data.toString());

  // Aufgabe 1
  for(var i=0;i<json_object.cities.length;i++) {
      console.log("name: " + chalk.blue(json_object.cities[i].name));
      console.log("country: " + chalk.green(json_object.cities[i].country));
      console.log("population: " + chalk.red(json_object.cities[i].population));
      if(i<(json_object.cities.length-1))
        console.log("----------------------");
    }
});

var fs=require('fs');


fs.readFile(__dirname+"/staedte.json", function(err, data){
  var json_object = JSON.parse(data.toString());

  // Aufgabe 1
  for(var i=0;i<json_object.cities.length;i++) {
      console.log("name: " + json_object.cities[i].name);
      console.log("country: " + json_object.cities[i].country);
      console.log("population: " + json_object.cities[i].population);
      if(i<(json_object.cities.length-1))
        console.log("----------------------");
    }
});

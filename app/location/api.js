const readline = require("readline");
const request = require("request");

const base_url = "https://maps.googleapis.com/maps/api/place";

const place = "/nearbysearch";
const place_details = "/details";
const place_radar = "/radarsearch";
const place_text = "/textsearch";

const types = "&types=bar"
const output_json = "/json?";
const language = "&language=de";

const API_key = "&key=AIzaSyCTVzkmmporXHNqPN7HX-ce0_3KPB7yqjM";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function startAPI() {
  console.log("In welcher Satdt sind sie?");
  rl.question("Stadt: ", (answer) => {
    rl.close();
    var id = "ChIJb72ylfq1vkcRGPbOIATRqlY"; //grammo id für tests
    getPlaces(answer);
    console.log("\n \n");
    detailsPlace(id);
  })
}


function getPlaces(input) {
  var query = base_url+place_text+output_json+"query="+input+types+language+API_key;
  request({
    url: query,
    json: true
  }, function (error, response, body) {
    if(error) {
      console.log("Something didn't work. Try again.");
    }else{
      if(response.statusCode===200) {
        //Eigentliche Abfrage
        if(body.status==="INVALID_REQUEST") {
          console.log("Error! " + body.status);
        } else {
          var count = body.results.length;
          console.log("\n--------RESULT--------");
          console.log("Results: " + count)
          for(var i=0;i<count;i++) {
            console.log("\n" + (i+1) + "\)");
            console.log("Name: " + body.results[i].name);
            console.log("Address: " + body.results[i].formatted_address);
            console.log("Place_id: " + body.results[i].place_id);
          }
        }
      }else{
        console.log("Connection Error: " + response.statusCode);
      }
    }
  })
}

function detailsPlace (input){
  var query = base_url+place_details+output_json+"placeid="+input+types+language+API_key;
  request({
    url: query,
    json: true
  }, function (error, response, body) {
    if(error) {
      console.log("Something didn't work. Try again.");
    }else{
      if(response.statusCode===200) {
        //Eigentliche Abfrage
        if(body.status==="INVALID_REQUEST") {
          console.log("Error! " + body.status);
        } else {
          console.log("Name: "+ body.result.name);
          console.log("Adress: "+ body.result.formatted_address);
          console.log("Telefon: "+ body.result.formatted_phone_number);
          console.log("Öffungszeiten:" + body.result.opening_hours.weekday_text);
          console.log("Jetzt geöffent: "+ body.result.opening_hours.open_now);
          console.log("Website: "+ body.result.website);

        }
      }else{
        console.log("Connection Error: " + response.statusCode);
      }
    }
  })
}
startAPI();

var data = require("./persons.json");

console.log("lets go");

for (i=0; i<data.length; i++){
    console.log(data[i].name);
    console.log(data[i].address);

}
function loadJSONdata(){
    //create ajax object
    var xmlhtpp = new XMLHttpRequest();
    
    xmlhtpp.open("GET", "https://rata.digitraffic.fi/api/v1/metadata/stations", true);
    xmlhtpp.send();
    console.log("executed");

    xmlhtpp.onreadystatechange=function() {
        if (xmlhtpp.readyState == 4 && xmlhtpp.status == 200) {
            console.log("response get")
            //document.getElementById("myDiv").innerHTML= xmlhtpp.responseText;
            var jsonDoc = xmlhtpp.response;
            var jsonData = JSON.parse(jsonDoc);

            
            var text = "<table border = '1'>";

            for (var i = 0; i < jsonData.length; i++) {
                text += "<tr><td>" + jsonData[i].stationName + "</td></tr>";
                
            }
            text += "</table>"
            document.getElementById("myDiv").innerHTML = text;

        }
    }
}
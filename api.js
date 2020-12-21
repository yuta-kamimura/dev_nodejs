const fetch = require("node-fetch");

function　callApi() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=d3addd5b87abd1646818e926a54cb9b1")
    .then(function (res){
        return res.json();
    })
.then(function (data) {
console.log(data);
});
}

callApi();
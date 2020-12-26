const fetch = require("node-fetch");
//APIから天気予報の情報取得
function　callApi() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=d3addd5b87abd1646818e926a54cb9b1")
    .then(function (res){
       return res.json();
    })
.then(function (data) {
//もし天気が曇りならばメッセージ
const apiget = data.weather[0].main;

if(apiget === "Clouds"){
    console.log("今日はくもりです") 
}
});
}  

//xx時間事に天気予報APIを叩く
function intervalFunc() {
callApi();
 
}
setInterval(intervalFunc, 3000);
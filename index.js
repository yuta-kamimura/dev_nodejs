const fetch = require('node-fetch');
// const { default: fetch } = require('node-fetch');
const mailFunction = require('./mail_send.js');

// APIから天気予報の情報取得
async function callApi() {
  const res = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=d3addd5b87abd1646818e926a54cb9b1&lang=ja&units=metric',
  );
  const results = await res.json();
  const nowWeather = `現在の${results.name}は${results.weather[0].description}です`;
  console.log(nowWeather);
  // 24時間後の天気を取得
  fetch(
    'http://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=d3addd5b87abd1646818e926a54cb9b1&lang=ja&units=metric',
  )
    .then((res) => res.json())
    .then((data) => {
      // もし天気が雨の時
      const tomorrow = data.list[7];
      const apiget = tomorrow.weather[0].main;
      if (apiget === 'Rain') {
        console.log('明日は雨です');
        mailFunction.sendmailer();
      }
      // もし天気が曇りの時
      else if (apiget === 'Clouds') {
        console.log('明日は曇りです');
      }
      // それ以外天気が晴れの時
      else {
        console.log('明日は晴れです');
      }
    });
}

// callApi();
const id = setInterval(() => {
  callApi();
}, 12000);

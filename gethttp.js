var client = require('cheerio-httpcli');

// Googleで「node.js」について検索する。
client.fetch(
  'https://info.finance.yahoo.co.jp/ranking/?kd=41&mk=1&tm=d&vl=a',
  { q: 'node.js' },
  function (err, $, res) {
    // レスポンスヘッダを参照
    console.log(res.headers);
    // HTMLタイトルを表示

    console.log($('title').text());

    // リンク一覧を表示
    $('a').each(function (idx) {
      console.log($(this).attr('href'));

      //console.log(typeof res.headers);
    });
  }
);

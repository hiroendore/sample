var express = require('express');
 
// express の実態 Application を生成
var app = express();
 
// テンプレートエンジンを EJS に設定
app.set('views', './views');
app.set('view engine', 'ejs');
 
// 静的ファイルは無条件に公開
app.use('/public', express.static('public'));
 
// ルーティング設定
app.use('/', require('./routes/index.js'));
 
// サーバーをポート 3000 で起動
// app.listen(3000);
 
// アプリケーション開始ログ
// console.log('Server running at http://localhost:3000');
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

//写真のサンプルデータ
var photoList = [
    {
        id: "001",
        name: "photo01.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    }, {
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }, {
        id: "list",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]

//写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
    res.json(photoList);
});


app.get("/api/photo/:photoId", function(req, res, next){
    var photo;
    console.dir(req.params)
    for (i=0; i<photoList.length; i++) {

        if (photoList[i].id == req.params.photoId) {
            var photo = photoList[i];
        }
    };
    res.json(photo);
});
var express = require('express');
var router = express.Router();
 
// デフォルトルーティング→index.ejsに飛ばしてる（ejsは省略されている。）
router.get('/', function (request, response) {
    response.render('index', { title: 'Sample Node.js', message: 'Hello there!' });
});
 
module.exports = router;


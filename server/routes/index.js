var express = require('express');
var router = express.Router();
const db = require('../models/mysql')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.post('/post', function(req, res) {
    // connection.query('SELECT * from yuzhi', function(err, rows, fields) {
    //     if (err) {
    //         res.json(err.message)
    //         return;
    //     }
    //     res.json(rows)
    // })
    const name = req.body.name;
    const password = req.body.password
    if (name == 'fuck' && password == 'hhh') {
        res.json({
            result: 'ok'
        })
    } else {
        res.json({
            result: 'fail'
        })
    }

})
router.get('/test', function(req, res) {
    var sql = "SELECT * from notice"
    db.query(sql, function(err, result, fields) {
        if (result.length > 0) {
            return res.status(200).json({
                result: 'ok',
                data: result
            })
        } else {
            return res.status(200).json({
                result: 'error'
            })
        }
    })

})
router.get('/gettest', function(req, res) {
    return res.status(200).json({
        result: 'ok'
    })
})
router.get('/testget', (req, res) => {
    res.json({
        result: 'ok'
    })
})
module.exports = router;
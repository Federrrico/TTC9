import express from "express";
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '/pong' });
});

export default router;

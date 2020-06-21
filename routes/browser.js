var express = require('express');
var router = express.Router();
const upload = require("../utils/upload")
const { loadOriginals, saveOriginals } = require("../utils/data")
const { loadMemes, saveMemes } = require("../utils/data")

router.get('/', function (req, res, next) {

  let myData = loadOriginals()
  // res.send("oke")
  res.render("originals", {
    images: myData,
    path: "images/originals/"
  })
});

router.post("/createMeme", function (req, res, next) {
  console.log(req.body)
  
}
)



module.exports = router;

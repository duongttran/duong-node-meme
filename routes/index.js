var express = require('express');
var router = express.Router();
const upload = require("../utils/upload")
const { loadOriginals, saveOriginals } = require("../utils/data")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.render("index", { error: err.message })

    }
    if (!req.file) {
      return res.render("index", { error: "cannot upload" })
    }
    // Everything went fine.


    const originals = loadOriginals();
    originals.push({ filename: req.file.filename }

    )
    saveOriginals(originals)
    let myData= loadOriginals()
    // res.send("oke")
    res.render("originals", {
      images: myData,
      path: "images/originals/"
    })
  })
})

module.exports = router;

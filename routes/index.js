const enk = require("./enk_controller");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })



module.exports = function (app) {


app.get('/calculate/marcopolo',enk.calculatePuz);
app.get('/ascii/uploader',enk.renderAsciiUploader);
app.post('/ascii/parser',upload.single('asciinumber'),enk.asciiParser);
};
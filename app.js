const express = require('express')
const bodyParser = require("body-parser");
var tesseract = require('node-tesseract');
const { text } = require('body-parser');
const app = express()
const port = 3000
process.env.PWD = process.cwd();
app.use(express.static(process.env.PWD + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


   


app.get('/', (req, res) => {
  
   tesseract.process('./images/s1.jpg',function (err, text) {
     if(err){
         return console.log("An error occured: ", err);
     }

     console.log("Recognized text:");
     // the text variable contains the recognized text
     console.log(text);
     res.render('index',{Text:text});
 });
 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
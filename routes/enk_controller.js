'use strict';

const fs = require('fs');
const enkHelper = require('./helper/enkHelper')


var enk = {


  calculatePuz: function(req, res, next) {


    var limit= req.query.limit || 1000000;

    //Using Singleton pattern here
    if(global.result && global.limit==limit){
      return res.json(global.result);
    }

    enkHelper.extractor(limit,function(err,result){
      if(!err){
       return res.json(result)
     }
     res.json('Some Error Occured');
     return;
   })
  },

  renderAsciiUploader: function(req,res,next){
    res.render('asciiUploader.html')
  },

  asciiParser : function(req,res,next){
 
   //using sync function ,it will run good till 1000 ascii number in a file
   var array = fs.readFileSync(req.file.path).toString().split('\n');
   var invoice ='';
   var Digit27Queue =[];
   var numberList=[];
   
   for(var i=0;i<array.length;i++){

     if(array[i].length == 0){
      for(var k=0;k<Digit27Queue.length/3;k++){
        var binaryFormat= Digit27Queue[k]+Digit27Queue[k+9]+Digit27Queue[k+18];
        enkHelper.numberMap(binaryFormat,function(err,result){
          invoice = invoice+result;
        })
        if(k==8){
          numberList.push(invoice+'\r');
          invoice='';
          Digit27Queue=[];
        }
      }
    }

    for (var j=0;j< array[i].length; j+=3) {
      var part_a = (array[i][j] == ' ') ? "blank":array[i][j];
      var part_b = (array[i][j+1] == ' ') ? "blank":array[i][j+1];
      var part_c = (array[i][j+2] == ' ') ? "blank":array[i][j+2];

      var partionFormat = part_a+part_b+part_c;
      enkHelper.partionMap(partionFormat,function(err,result){
        Digit27Queue.push(result);
      })

    }
  }

  res.writeHead(200, {'Content-Type': 'application/force-download','Content-disposition':'attachment; filename=ParsedInvoice.txt'});
  var str=numberList.toString()
  var numberFormat = str.replace(/,/g, "\n");
  res.end(numberFormat);
 },
};
module.exports = enk;
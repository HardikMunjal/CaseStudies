'use strict';

var helper = {

extractor: function(limit, cb) {

  var parsedResult=[];
  var arrayObject = {};

  for (var i=1;i<=limit;i++){

    if(parsedResult.length==1000){
      arrayObject['a'+(i-1)/1000]=parsedResult;
      parsedResult=[];
    }
    if(i%4==0 && i%7!=0){
        parsedResult.push('marco');
    }
    else if(i%7==0 && i%4!=0){
        parsedResult.push('polo');
    }
    else if(i%7==0 && i%4==0){
        parsedResult.push('marcopolo');
    }
    
    else{parsedResult.push(i)
         }

    if(i==limit){
        arrayObject['last']=parsedResult;
        parsedResult=[];
    }
      }
      global.result =arrayObject;
      global.limit=limit;
      return cb(null,arrayObject);
  },

  numberMap:function(binary,cb){

    var number='';
    switch (binary) {
      case 'bfg':
          number='0';
          break;
      case 'acc':
          number ='1';
          break;
      case 'bde':
          number ='2';
          break;
      case 'bdd':
          number = "3";
          break;
      case 'agc':
          number = "4";
          break;
      case 'bed':
          number = "5";
          break;
      case 'beg':
          number = "6";
          break;
      case 'bcc':
          number = "7";
          break;
      case 'bgg':
          number = "8";
          break;
      case 'bgd':
          number = "9";
          
  }
  return cb(null,number);
  },

  partionMap:function(binary,cb){
    //console.log(binary);
    var number='';
    switch (binary) {
      case 'blankblankblank':
          number='a';
          break;
      case 'blank_blank':
          number ='b';
          break;
      case 'blankblank|':
          number ='c';
          break;
      case 'blank_|':
          number = "d";
          break;
      case '|_blank':
          number = "e";
          break;
      case '|blank|':
          number = "f";
          break;
      case '|_|':
          number = "g";
          
  }
  return cb(null,number);
  }
};
module.exports = helper;
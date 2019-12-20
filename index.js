const http = require('http');
const fs = require('fs');
const {e,fileName} = require('minimist')(process.argv.slice(2));

/**
 *
 * @param {String} data - sending data
 * @param {Number} statusCode - http status code
 * @param {String} ContentType - type your content
 * @param {Object} res - response Object
 */

function sendData(data,statusCode,ContentType,res){
  res.writeHead(statusCode,{
    'Content-Type':`${ContentType};charset=utf8`
  });
  res.write(data);
  res.end();
}

/**
 *
 * @param {String} filePath - path your file
 * @param {Object} res - response Object
 * @param {String} ext - your file extantion
 */

function readDirectoryData(filePath,ext,res){
  fs.readFile(`${filePath}.${ext}`,'utf8',(err,data) => {
    let wdata = data;
    let statusCode = 200;
    if(err){
      wdata = 'File note found';
      statusCode = 404;
    }

    sendData(wdata,statusCode,'text/html',res);
  });
}

http.createServer((req,res) => {
  if(e && fileName){
    readDirectoryData(fileName,e,res);
  }else{
    sendData('Hello World',200,'text/html',res);
  }
}).listen(3000);





const http = require('http');
const fs  = require('fs');
const argv = require('minimist')(process.argv.slice(2));
console.log(argv);


/**
 *
 * @param {String} filePath - path your file
 * @param {Object} res - response object
 */


function readDir(filePath,res){
  fs.readFile(`./${filePath}`,'utf-8',(err, data) => {
    if(err){
      console.log(`${filePath}.txt not found`);
    }else{
      res.end(data);
    }
});
}

http.createServer((req,res) => {
  if(!argv.e || argv.fileName){
    res.writeHead(200);
    res.end('hello world');
  }

  switch(argv.e || argv.fileName){
    case 'txt':readDir(`hello.txt`,res);
    break;
    case 'html': readDir(`main.html`,res);
    break;
    case 'hello':readDir(`${argv.fileName}.txt`,res);
    break;
    case 'main': readDir(`${argv.fileName}.html`,res);
    break;
}
}).listen(3000);

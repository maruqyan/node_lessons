const http = require('http');
const fs = require('fs');
const url = require('url');

/**
 * @function sendData
 *
 * @param {Object} res - response object
 * @param {String} data - html content
 * @param {Number} statusCode - http status code
 */

function sendData(res,data,statusCode = 500){
  res.writeHead(statusCode,{
    'Content-Type': 'text/html'
  });
  res.end(data);
}


/**
 * @function errors
 *
 * @param {Object} res - response object
 * @param {Object} iSerror - error Object
 */


function errors(res,iSerror){
  try{
    if(iSerror){
      throw iSerror;
    }
  }catch(iSerror){
    res.writeHead(500);
    res.end(iSerror.message);
  }
}


/**
 *
 * @param {Objet} res - response object
 * @param {String} fileName - file directory path
 * @param {Number} statusCode - http status code
 */


function senddataToClient(res,fileName = 'pages/index',statusCode = 200){
  fs.readFile(`${fileName}.html`,'utf8',(err, data) => {
    if(err){
      errors(res,err);
    }
    sendData(res,data,statusCode);
  });
}


http.createServer((req,res) => {
  const  {page} = url.parse(req.url,true).query;
  switch(page){
    case 'home': senddataToClient(res); break;

    case 'contact': senddataToClient(res,'pages/contact'); break;

    case 'news': senddataToClient(res,'pages/news'); break;

    default: senddataToClient(res,'pages/error',404); break;
  }
}).listen(3001,  () => {
  console.log(`Server runnning on port 3001`);
});


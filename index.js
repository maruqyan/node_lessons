const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));


/**
 *
 * @param {String} filePath - path your file
 */

function readDir(filePath){
  fs.readFile(`./${filePath}`,'utf-8',(err, data) => {
    if(err){
      console.log(`${filePath}.txt not found`);
    }else{
      console.log(data);
    }
});
}


switch(argv.f || argv.file || argv.c || argv.css){
    case argv.f:readDir(`${argv.f}.txt`)
    break;
    case argv.file: readDir(`${argv.file}.txt`)
    break;
    case argv.c:readDir(`${argv.c}.css`)
    break;
    case argv.css: readDir(`${argv.css}.css`)
    break;
}






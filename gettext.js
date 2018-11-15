let fs = require("fs");
let glob = require('glob');

getFileString();

function trim(str) {
    return str.replace(/^\s+|\s+$/gm,'');
}

function getFileString(globPath = 'src/components/**/*.vue') {
    let globArr = glob.sync(globPath);
    let allString = '';
    let reg = /\$t\('[^)]+'\)/gim;
    globArr.forEach((path, index) => {
        fs.readFile(path, function (err, data) {
            let fileString = '';
            if (err) {
                return console.error(err);
            }
            // console.log('data', data.toString().match(reg));
            let matchStr = data.toString().match(reg);
            // 从vue文件中提取$t中的文字
            if(matchStr) fileString = matchStr.join(',');
            // console.log("提取到的字符: ", fileString);
            allString += fileString;
            if(index < globArr.length-1) allString += ',';
            if(index === globArr.length-1) {
                console.log('allString1', allString)
                writeFile(allString);
            };
        });
    });
};

// 写入文件
// fileString: "确定":"确定", ...
function writeFile(fileString, path = 'src/locale/zh-CN.json') {
    let allString = fileString.replace(/\$t|\(|\)/gim, '').replace(/\'/gim, '\"').replace(/\s/g, '');
    let arr = allString.split(',');
    let objString = '{';
    arr.forEach((item, index) => {
        if(item) {
            objString += item + ':' + item;
            if(index < arr.length-1) objString += ',';
        }
    });
    objString += '}';
    console.log('objString', objString);
    fs.writeFile(path, objString,  function(err) {
        if (err) {
            return console.error(err);
       }
       console.log("数据写入成功！");
    })
};
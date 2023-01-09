#!/usr/bin/env node
let command = process.argv.slice(2,3);
let fs = require('fs');
let path = require('path');

let wcat = 'wcat';
let restOfArray = process.argv.slice(3);
//console.log(restOfArray);
let fileNameArray = [];
let otherCommands = [];
for(let i in restOfArray){
    if(restOfArray[i].includes(".txt")){
        fileNameArray.push(restOfArray[i]);
    }else{
        otherCommands.push(restOfArray[i]);
    }
}

//console.log(fileNameArray);
//console.log(otherCommands);
if(command == wcat){
    if(otherCommands.length==0){
        let retData = retConcatContent(fileNameArray);
        console.log(retData); // Display the file content
    }else if(otherCommands.length ==1){
        for(let i =0 ; i < otherCommands.length ;i++){
            let command = otherCommands[i];
            //console.log(command);
            if(command === '-s'){
                removeSpace(fileNameArray);
            }else if(command === '-n'){
                addNumbering(fileNameArray);
            }else if(command === '-b'){
                addNumberExclusive(fileNameArray);
            }
        }
      
    }else{
        let concatenedContent = retConcatContent(fileNameArray);
            if(otherCommands.includes('-s')){
                concatenedContent = concatenedContent.replace(/([\r\n]){2,}/g, '\n\n');
                //console.log(concatenedContent);
            } if(otherCommands.includes('-n')){
                let j = 1;
                concatenedContent = concatenedContent.replace(/^/gm, () => `${j++} `);
                //console.log(concatenedContent);
            } else if(otherCommands.includes('-b')){
                let index=1;
                let splitArr = concatenedContent.split('\n');
                let arr =[];
                for(let i in splitArr){
                  if(splitArr[i] === ''){
                    arr.push('');
                  }else{
                    let str =myFunc(splitArr[i],index);
                    index++;
                    arr.push(str);
                  }
                }
                concatenedContent = arr.join('\n');
        }
        
        // console.log(otherCommands);
        // if(otherCommands.includes('yes')){
        //     console.log("bdshbdhsb");
        //     let indexOfNewFileOperator = restOfArray.indexOf('>>');
        //     let newFile = restOfArray[indexOfNewFileOperator++];
        //     let newFilePath = path.join("/Users/thewithcer/VscodeProjects/webDev/nodeJsChallenge" , newFile);
        //     console.log(newFilePath);
        //     fs.writeFileSync(newFilePath , concatenedContent );

        // }else{
        //     console.log(concatenedContent);
        // }
    }
   
}



//Functions
function retConcatContent(fileNameArray) {
    let data ='';
    for(let i=0; i < fileNameArray.length ;i++){
        let pathOfFile = path.join("/Users/thewithcer/VscodeProjects/webDev/nodeJsChallenge" , fileNameArray[i])
         data += fs.readFileSync(pathOfFile, 'utf8',) + '\n';
    }
    return data;
}

function removeSpace(fileNameArray) {
    for(let i=0; i < fileNameArray.length ;i++){
        let pathOfFile = path.join("/Users/thewithcer/VscodeProjects/webDev/nodeJsChallenge" , fileNameArray[i])
        let data = fs.readFileSync(pathOfFile, 'utf8',);
        data = data.replace(/([\r\n]){2,}/g, '\n\n');
        console.log(data); // Display the file content
    } 
}

function addNumbering(fileNameArray) {
    let j = 1;
    for(let i=0; i < fileNameArray.length ;i++){
        let pathOfFile = path.join("/Users/thewithcer/VscodeProjects/webDev/nodeJsChallenge" , fileNameArray[i])
        let data = fs.readFileSync(pathOfFile, 'utf8',);
        data = data.replace(/^/gm, () => `${j++} `);
        console.log(data); // Display the file content
    } 
}

function addNumberExclusive(fileNameArray) {

    let index=1;
    for(let i=0; i < fileNameArray.length ;i++){
        let pathOfFile = path.join("/Users/thewithcer/VscodeProjects/webDev/nodeJsChallenge" , fileNameArray[i])
        let data = fs.readFileSync(pathOfFile, 'utf8',);
        let splitArr = data.split('\n');
        let arr =[];
        for(let i in splitArr){
          if(splitArr[i] === ''){
            arr.push('');
          }else{
            let str =myFunc(splitArr[i],index);
            index++;
            arr.push(str);
          }
        }
         data = arr.join('\n');
        console.log(data); // Display the file content
    }
}

//Helper functions 
function myFunc(line ,index ){
  if(line === ''){
  }else{
    return `${index} ${line}`
  }
}







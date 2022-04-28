//todo: require the util and fs needed
const util = require("util");
const fs = require("fs");

const uuidv1 = require("uuid");
const { builtinModules } = require("module");


class Store{
    read(){
        util.promisify(fs.readFile)
    }
    write(content, file){
        fs.readFile(file, "utf8", (err, data) =>{
            if(err){
                console.error(err);
            }else{
                const parsedData = JSON.parse(data);
                parsedData.push(content);
                fs.writeFile("db.json" , JSON.stringify(parsedData, null, 4), (err) =>
                err ? console.error(err) : console.info('\nData stored to db.json')
                );
            }
        })
    }
    //get the notes
    //add the notes
    //delete the notes
}

//todo: require the uuid/v1 package in your package json
module.exports = new Store();
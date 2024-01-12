const fs = require('fs');
const path = require('path');
const Events = require('events');

const HELPER = require('./helper.js');

class WrapJson extends Events{
  constructor(filepath){
    super();
    this.filepath=filepath;
  }
  loadFile(){
    const safeReadResult=WrapJson.JsonFileSafeRead(this.filepath);
    this.currentStatus={
      exist:WrapJson.FileExists(this.filepath),
      isJsonValid:safeReadResult[0]
    };
    this.currentContent={

    };
  }
  get status(){
    this.loadFile();
    //return ;
  }
}

HELPER.USE(HELPER,WrapJson);

module.exports=WrapJson;

const HELPER = require('./helper.js');

const Events = require('events');
const path = require('path');
const fs = require('fs');

class PM_Checker extends Events{
  constructor(repo, file){
    super();
    this.repoPath=repo;
    this.FILE=file;
  }
  get exist(){
    return PM_Checker.FileExists(
      this.repoPath,
      this.FILE
    );
  }
  get valid(){
    return PM_Checker.JsonFileSafeRead(
      this.repoPath,
      this.FILE
    )[0];
  }
  static CHECKUP(repo, file){
    return new PM_Checker(repo, file);
  }
};

HELPER.USE(HELPER,PM_Checker);

module.exports=PM_Checker;

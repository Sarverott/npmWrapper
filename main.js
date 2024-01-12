const path = require('path');

const NPM_Wrapper=require("./src/npm-wrapper.js");
const PackageManager=require("./src/package-manager.js");
const PM_Checker=require("./src/pm-checker.js");
const HELPER = require('./src/helper.js');

module.exports=Object.assign(
  NPM_Wrapper,
  {
    NPM_Wrapper,
    HELPER,
    PackageManager,
    PM_Checker,
    npm:null,
    package:null,
    CWD:process.cwd(),
    CD(cdPath){
      this.CWD=path.resolve(this.CWD, cdPath);
      return this.CWD;
    }
  }
);

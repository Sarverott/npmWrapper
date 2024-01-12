const HELPER = require('./helper.js');

const Events = require('events');
const PM_Checker = require('./pm-checker.js');

class PackageManager extends Events{
  constructor(repoPath){
    super();
    this.repoPath=repoPath;
  }
  get READ(){
    return {
      PM_HOOK:this,
      get package(){
        return PackageManager.JsonFileSafeRead(this.PM_HOOK.repoPath,"package.json")[1];
      },
      get packageLock(){
        return PackageManager.JsonFileSafeRead(this.PM_HOOK.repoPath,"package-lock.json")[1];
      }
    }
  }
  get IS(){
    return {
      package:PM_Checker.CHECKUP(this.repoPath,"package.json"),
      packageLock:PM_Checker.CHECKUP(this.repoPath,"package-lock.json")
    }
  }
};

HELPER.USE(HELPER,PackageManager);

module.exports=PackageManager;

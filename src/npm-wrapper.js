const HELPER = require('./helper.js');

const Events = require('events');

class NPM_Wrapper extends Events{
  constructor(repoPath, enviroment=process.env){
    super();
    //NPM_Wrapper.instance=this;
    this.enviroment=enviroment;
    this.repoPath=repopath
  }
  static PROXY_GET(npm, prop){

  }
  static PROXY_SET(npm, prop, value){

  }
  childProcessOpts(){
    return {
      cwd:this.repoPath,
      env:this.enviroment
    }
  }
  get createProxy(){
    return new Proxy(
      this,
      {
        get:this.constructor.PROXY_GET,
        set:this.constructor.PROXY_SET
      }
    );
  }
};

HELPER.USE(HELPER,NPM_Wrapper);

module.exports=NPM_Wrapper;

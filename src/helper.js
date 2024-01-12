const fs = require('fs');
const path = require('path');

const HELPER={
  USE(what, asWho=this){
    Object.assign(asWho, what);
  },
  LOAD( ...args ){
    const PROTO=this;
    return new PROTO( ...args );
  },
  JsonFileSafeRead( ...pathchain ){
    var data=null;
    try{
      data=fs.readFileSync(
        path.join( ...pathchain )
      );
      data=data.toString("utf8");
      data=JSON.parse(data);
      return [ true , data , null ];
    }catch( error ){
      return [ false , data , error ]
    }
  },
  FileExists( ...pathchain ){
    return fs.existsSync(
      path.join( ...pathchain )
    );
  }
}
module.exports=HELPER;

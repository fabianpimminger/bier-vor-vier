var oldTime = new Date().getTime();

var dateBackup = Date;

Date = function(v){
  var newTime = new dateBackup().getTime();
  return new dateBackup(632509200000 + newTime - oldTime);    
}
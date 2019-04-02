const mostUsedCategory = (array) => {
  var mf = 1;
  var m = 0;
  var item;
  for (var i=0; i<array.length; i++){
    for (var j=i; j<array.length; j++){
      if (array[i] == array[j])
        m++;
      if (mf<m)
      {
        mf=m; 
        item = array[i];
      }
    }
    m=0;
  }
  return item
}
module.exports = mostUsedCategory;
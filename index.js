function check(array,key) {
  for (index = 0; index < array.length; index++) {
    if(array[index] == key){
      return index;
    }
  }
  return -1;
}

var array = [10,20,30,40,50];
var key = 40;

var find = check(array,key);

console.log("Position of the Element in the Array: "+find)

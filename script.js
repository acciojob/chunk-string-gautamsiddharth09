function stringChop(str, size) {
  // your code here
	if(str === null || size <= 0) return [];
	let result = [];
	for(i=0; i < str.length; i=i+size){
		result.push(str.slice(i,i+size));
	}
	return result;
	
}
//Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

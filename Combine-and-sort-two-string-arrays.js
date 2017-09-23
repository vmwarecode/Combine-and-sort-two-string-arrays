//
// VMware vRealize Orchestrator action sample
// 
// - Combines two arrays of strings
// - Removes duplicate entries
// - Alphabetically sorts the array
//
//Action Inputs:
// array1  -  Array/string
// array2  -  Array/string
//
//Return type: Array/string

var arrays = [array1,array2];
var index = new Properties();

for (var i in arrays) {
    var item = arrays[i];
    for (var j in item) {
        index.put(item[j],true);
    }
}
return index.keys.sort();
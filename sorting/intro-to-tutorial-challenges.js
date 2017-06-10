function processData(input) {
    //Enter your code here
    var get = input.split("\n");
    var me = get[0];
    var arr = get[2].split(" ");
    var index = 0;
    for(var x = 0; x < arr.length; x++){
        if(me == arr[x]){
            index = x;
        }
    }
    console.log(index)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


function processData(input) {
    //Enter your code here
    var k = input.split("\n")[0].split(" ")[1],
    arr = input.split("\n")[1].split(" ");
    var res = 0
    for(var x = 0; x <arr.length; x++){
     for(var y = x + 1; y <arr.length; y++){
        if(arr[x] - arr[y] == k || arr[y] - arr[x] == k){
            res += 1
        }
    }   
    }
    console.log(res)
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


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var p = 0, ng = 0, z = 0;
    for(var a_i = 0; a_i < n; a_i++){
        if(arr[a_i] > 0){
            p += 1;
        }else if(arr[a_i] < 0){
            ng += 1;
        }else{
            z += 1;
        }
    }
    console.log(p/n + "\n" + ng/n + "\n" + z/n);

}


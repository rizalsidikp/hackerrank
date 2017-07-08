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
    var a = readLine();
    var b = readLine();
    var arr_a = a.split('');
    var arr_b = b.split('');
    var x = 0;
    var res = 0;
    
    for(x; x<arr_a.length; x++){
       var index = arr_b.indexOf(arr_a[x])
       if( index != -1){
           arr_a[x] = 0
           arr_b[index] = 0
           res += 2
       }
    }
    console.log((arr_a.length + arr_b.length) - res)
}


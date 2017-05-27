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
    var s = readLine();
    var row = Math.round(Math.sqrt(s.length));
    var column;
    var res = [];
    if (row >= Math.sqrt(s.length)) column = row; else column = row + 1;
    for (var x = 0; x < column; x++){
       res[x] = '';
       for(var y = x; y < s.length; y += column){
           res[x] += s[y];
       }
    }
    console.log(res.join(" "));
}


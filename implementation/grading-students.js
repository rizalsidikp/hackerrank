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

function solve(grades){
    // Complete this function
    var n_grades;
    var res = [];
    for(var grades_i = 0; grades_i < grades.length; grades_i++){
        if(grades[grades_i] >= 38){
            n_grades = Math.ceil((grades[grades_i]/5)) *5;
            if(n_grades - grades[grades_i] < 3){
                res[grades_i] = n_grades;
            }else{
                res[grades_i] = grades[grades_i];
            }
        }else{
            res[grades_i] = grades[grades_i];
        }
    }
    return res;
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
    


}


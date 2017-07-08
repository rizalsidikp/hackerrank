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
    a = readLine().split(' ');
    a = a.map(Number);
    var numberOfSwaps = 0;
    for (var i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    for (var j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            var temp = a[j]
            a[j] = a[j + 1]
            a[j + 1] = temp
            numberOfSwaps += 1;
        }
    }
    
    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
        break;
    }
}   
    console.log('Array is sorted in '+ numberOfSwaps + ' swaps.')
    console.log('First Element: '+ a[0]);
    console.log('Last Element: '+ a[n - 1]);
}


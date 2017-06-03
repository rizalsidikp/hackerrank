process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
   processData(_input);
});

function countAnagramPairs(s){
    var c_a = s.split(''); // [a,b,b,a]
    var freq = new Array(c_a.length); // freq = [ , , , ]
    var subs_hash = [];
    //Step 1 - Nx26 frequency array
    freq[0] = new Array(26); // matriks
    freq[0].fill(0); // ke 26 array diisi 0
    freq[0][c_a[0].charCodeAt(0) - 97] = 1; // c_a[0] = a charCode dari a itu 97 jadi freq[0][0] = 1 freq[0]=1,0,0,0,0,0...
    for (var i = 1; i < c_a.length; i++){
        var code = c_a[i].charCodeAt(0) - 97; //huruf a-z disimpen dalam 0 - 26
        freq[i] = freq[i-1].slice();
        freq[i][code] +=1; // 
    }

    //Step 2 - For each substring store its character count as an array of 26
    for (var d = 1; d < c_a.length; d++){
        for (var j = 0; j + d <= c_a.length; j++){
            var subs_a = c_a.slice(j, j+d);
            var subs = subs_a.join('');
            var subs_count = new Array(26);
            subs_count.fill(0);
            for (var sI = 0; sI < subs_a.length; sI++){
                var code = subs_a[sI].charCodeAt(0) - 97;
                if (j - 1 >= 0) {
                    subs_count[code] = freq[j+d-1][code] - freq[j-1][code];
                } else {
                    subs_count[code] = freq[j+d-1][code];
                }
            }
            subs_hash.push([subs, subs_count]);
        }
    }

    //Step 3 sort subs_hash
    subs_hash.sort(function(a,b){
        if (a[0].length === b[0].length){
            var a1 = a[1];
            var a2 = b[1];
            for (var i = 0; i < a1.length; i++){
                if (a1[i] > a2[i]){
                    return 1;
                } else if (a1[i] < a2[i]) {
                    return -1;
                }
            }
            return 0;
        } else {
            return a[0].length - b[0].length;
        }
    })

    //Step 4 count the numbers
    var interCount = 0;
    var buffer = [];
    for (var p1 = 1; p1 < subs_hash.length; p1+=1){
        if (isSameCount(subs_hash[p1][1], subs_hash[p1-1][1])){
            if (interCount === 0){
                interCount = 1;
            }
            interCount+=1;
        } else {
            if(interCount > 0){
                buffer.push(interCount);
                interCount = 0;
            }

        }
    }
    if (interCount > 0){
        buffer.push(interCount);
    }

    // Step 5 for every count R above there is are 1+2+...+R-1 pairs
    var answer = 0;
    for (var b = 0; b < buffer.length; b++){
        answer += ((buffer[b] * (buffer[b]-1)) / 2); // formula for 1+2+...+R-1
    }

    console.log(answer);
}

function isSameCount(arr1, arr2){
    for (var i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

function processData(input) {
    var in_a = input.split('\n');
    var n = parseInt(in_a[0]);

    for (var i = 1; i <= n; i++){
        var s = in_a[i];
        countAnagramPairs(s);
    }
}

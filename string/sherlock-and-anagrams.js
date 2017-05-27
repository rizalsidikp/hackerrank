function processData(input) {
    //Enter your code here
    var s = input.split("\n");
    for(var x = 1; x < s.length; x++){
        var tmp = [];
        var r = 0;
        for(var a = 1; a <= s[x].length;a++){
            for(var b = 0; b < s[x].length;b++){
                tmp[b] = s[x].substr(b,a);
            }
            for(var y = 0; y < s[x].length;y++){
                for(z = y + 1; z < s[x].length;z++)
                    {
                        var cek1 = tmp[y].split("").sort().join("");
                        var cek2 = tmp[z].split("").sort().join("");
                        if(cek1 == cek2){
                            r += 1;
                        }
                    }
            }
        }
        console.log(r)
    }
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


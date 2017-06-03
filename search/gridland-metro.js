function processData(input) {
    //Enter your code here
    var tmp = input.split("\n");
    var x = tmp[0].split(" ");
    var total = x[0] * x[1];
    var arr_train = [];
    for(var y = 1; y <= x[2]; y++){
        var train = tmp[y].split(" ");
        if(y != 1){//jika bukan kereta pertama
            var train_b = tmp[y - 1].split(" ");
            if(train[0] == train_b[0]){//jika berada di jalur yang sama
                if(!(train[1] >= train_b[1] && train[2] <= train_b[2]))
                 {// jika tidak xxxxxx
                     //          xxxx
                   if(train[2] >= train_b[2] && train[1] >= train_b[1]){
                       if(train_b[2] - train[1] >= 0){
                        var temp = train_b[2] - train[1] + 1;
                        total = total - ((train[2] - train[1] + 1) - temp)
                        }else{
                          total = total - (train[2] - train[1] + 1);
                        }
                    }else if(train[1] <= train_b[1] && train[2] <= train_b[2]){
                       if(train_b[1] - train[2] >= 0){
                        var temp = train_b[1] - train[2] + 1;
                        total = total - ((train[2] - train[1] + 1) - temp)
                        }else{
                          total = total - (train[2] - train[1] + 1);
                        }
                    }else if(train[1] < train_b[1] && train[2] > train_b[2]){
                        var temp = (train_b[1] - train[2]) + (train_b[2] - train[1]) + 1;
                        total = total - ((train[2] - train[1] + 1) - temp)
                    }
                   }
            }else{//jika tidak berada di jalur yang sama
                total = total - (train[2] - train[1] + 1)
            }
        }else{//jika kereta pertama
                total = total - (train[2] - train[1] + 1);
            }
        
        
    }
    console.log(total);
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


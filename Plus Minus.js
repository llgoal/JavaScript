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
    
    var pos = 0;
    var neg = 0;
    var zero = 0;
    
    arr.forEach(function(item){
        pos += (item>0)?1:0;
        neg += (item<0)?1:0;
        zero += (item==0)?1:0;
    });
    
    console.log(parseFloat(pos/n).toFixed(6));
    console.log(parseFloat(neg/n).toFixed(6));
    console.log(parseFloat(zero/n).toFixed(6));

}

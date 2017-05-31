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
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var resultSet = new Array();
    var sum = 0;
    arr.forEach(function(item){
        sum += item;
    });
    arr.forEach(function(item){
        var num = sum-item;
        resultSet.push(num);
    });
    console.log(Math.min(...resultSet) + " " + Math.max(...resultSet));
}

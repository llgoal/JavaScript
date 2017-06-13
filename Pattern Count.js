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

function patternCount(s){
    var re = /10{1,2000}1/g; 
    var r = [], m;
    while (m = re.exec(s)) {
        re.lastIndex -= m[0].length - 1;
        r.push(m[0]);
    }
    return r.length;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = patternCount(s);
        process.stdout.write("" + result + "\n");
    }

}

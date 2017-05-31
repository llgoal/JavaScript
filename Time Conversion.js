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
    var time = readLine();

    var splited = time.split(":");
    if(splited[2].substr(2,2)=="PM")
        {
            if(parseInt(splited[0]) != 12){
                splited[0] = parseInt(splited[0])+12;
            }
        } else if(splited[2].substr(2,2)=="AM"){
            if(parseInt(splited[0]) == 12){
                splited[0] = "00";
            }
        }
    splited[2] = splited[2].substr(0,2);
    console.log(splited.join(":"));
}

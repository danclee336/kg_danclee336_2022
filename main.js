var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

var table = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
};
function parser(inputStr){
    for(var i = 0; i < inputStr.length; i++){
        process.stdout.write(table[inputStr.charAt(i)]);
    }
}
for (var i = 0; i < myArgs.length; i++){
    parser(myArgs[i]);
}
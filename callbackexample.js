callback
function myFunction(value1,value2,value3, callback) {

    value2 = 'somevalue2'; //to return
    value3 = 'somevalue3'; //to return

    callback( value2, value3 );

}

var value1 = 1;
var value2 = 2;
var value3 = 3;

myFunction(value1,value2,value3, function(value2, value3){
    if (value2 && value3) {
        //Do some stuff
        alert( value2 + '-' + value3 );
    }
});

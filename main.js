$(document).ready(function () {
function numberLength(numb) {
    if(numb.length > 12 ){

        return "longNum"
    }
    else{
        return numb;
    }
}
var firstNumber = '';
var secondNumber = '';
var operator  = '';
var result = '';

var display = $('#result');
display.text('0');

$('#clear').click(function () {
   firstNumber = '';
   secondNumber = '';
   display.text('0');
});
$('.numbers').not('#equal').click(function () {

    firstNumber += $(this).text();

    display.text(numberLength(firstNumber));
});
$('.operators').not('#clear').click(function () {

    operator = $(this).text();

    secondNumber += firstNumber;
    firstNumber = '';
});

$('#equal').click(function () {

    result = eval(secondNumber + operator + firstNumber);

    display.text(numberLength(result));
    firstNumber = '';
    secondNumber = '';
});

});
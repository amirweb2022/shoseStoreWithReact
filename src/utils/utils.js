export function toPersianNum(number) {
    var persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    var persianNumber = "";
    var numberString = number.toString();

    for (var i = 0; i < numberString.length; i++) {
        var digit = parseInt(numberString.charAt(i), 10);
        persianNumber += persianDigits[digit];
    }

    return persianNumber;
}
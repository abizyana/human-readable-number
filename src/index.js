module.exports = function toReadable(number) {
    let array = ("" + number).split("");

    if (number < 10) {
        return oneDigitNumberToString(array[0]);
    } else if (number < 100) {
        return convertTwoDigitNumber(array[0] + array[1]);
    } else if (number < 1000) {
        return (
            oneDigitNumberToString(array[0]) +
            " hundred" +
            " " +
            convertTwoDigitNumber(array[1] + array[2])
        ).trim();
    }
};

function convertTwoDigitNumber(number) {
    let array = number.split("");
    if (array[0] == "1" || array[1] == "0") {
        return oneDigitNumberToString(number);
    } else if (array[0] == "0" && array[1] != "0") {
        return oneDigitNumberToString(array[1]);
    } else if (array[1] != "0") {
        return tensToString(array[0]) + " " + oneDigitNumberToString(array[1]);
    }
}

function oneDigitNumberToString(number) {
    switch (number) {
        case "0":
            return "zero";
        case "1":
            return "one";
            break;
        case "2":
            return "two";
            break;
        case "3":
            return "three";
            break;
        case "4":
            return "four";
            break;
        case "5":
            return "five";
            break;
        case "6":
            return "six";
            break;
        case "7":
            return "seven";
            break;
        case "8":
            return "eight";
            break;
        case "9":
            return "nine";
            break;
        case "10":
            return "ten";
        case "11":
            return "eleven";
        case "12":
            return "twelve";
        case "13":
            return "thirteen";
        case "14":
            return "fourteen";
        case "15":
            return "fifteen";
        case "16":
            return "sixteen";
        case "17":
            return "seventeen";
        case "18":
            return "eighteen";
        case "19":
            return "nineteen";
        case "20":
            return "twenty";
        case "30":
            return "thirty";
        case "40":
            return "forty";
        case "50":
            return "fifty";
        case "60":
            return "sixty";
        case "70":
            return "seventy";
        case "80":
            return "eighty";
        case "90":
            return "ninety";
        default:
            return "";
    }
}

function tensToString(number) {
    switch (number) {
        case "2":
            return "twenty";
        case "3":
            return "thirty";
        case "4":
            return "forty";
        case "5":
            return "fifty";
        case "6":
            return "sixty";
        case "7":
            return "seventy";
        case "8":
            return "eighty";
        case "9":
            return "ninety";
        default:
            return "";
    }
}

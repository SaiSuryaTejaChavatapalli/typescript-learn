"use strict";
function generateError(message, errorCode) {
    throw {
        message,
        errorCode,
    };
}
const result = generateError("An Error Occured", 500);
console.log("Error return value", result);

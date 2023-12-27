function generateError(message: string, errorCode: number): never {
  throw {
    message,
    errorCode,
  };
}
const result = generateError("An Error Occured", 500);
console.log("Error return value", result);

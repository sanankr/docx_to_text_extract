const fs = require("fs");
const textract = require("textract");

exports.useTextract = async (filePath) => {
  return new Promise((res, rej) => {
    textract.fromFileWithPath(
      filePath,
      { preserveLineBreaks: true },
      (err, text) => {
        if (err) {
          console.log(`Error textract\n, ${err}\n`);
          rej("error textract");
        }
        res(text);
      }
    );
  });
};

var fs = require("fs");
var path = require("path");

var filereader = require("./extractor");
var txraDeco = require("./textractExtractor");
exports.readFilesHandler = async (filePath, decoder = "textract", endTimer) => {
  var filecontent = "";
  console.log(`Decoder ${decoder}`);
  if (decoder === "textract") {
    filecontent = await txraDeco.useTextract(filePath);

    console.log(`This is file content ==> `);
    console.log(filecontent);
    endTimer();
    return;
  }

  fs.readFile(filePath, async (err, data) => {
    // let filePath = filePath;
    // let filebuffer = data;
    // let filename =  files.file.name;
    var fileextension = path.extname(filePath);
    //   || filereader.getFileExtension(filename);
    console.log(`file extension, ${fileextension}\n`);
    switch (fileextension) {
      case ".docx":
        await filereader.extract(filePath).then(function (res, err) {
          console.log("fileReader\n");
          if (err) {
          }
          filecontent = res;
        });
        break;
      default:
        filecontent = filePath;
    }
    console.log(`This is file content ==>`);
    console.log(filecontent);
    endTimer();
  });
};

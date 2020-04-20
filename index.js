const { readFilesHandler: docxToTextDecoder } = require("./src/decoder");

const docxDir = `/Volumes/Project/DOCX-Extract/docx/`;
const promptFile = `${docxDir}test_prompt.docx`;
const mathFormula = `${docxDir}m.docx`;

const [cmd, entry, decoder, docFileType] = process.argv;
const filePath = docFileType === "m" ? mathFormula : promptFile;

console.log(`Decoding word file ${filePath}\n...`);

// console.log("args\t", decoder);c
const decodeDocxAndExtractText = async () => {
  const timerLabel = `${decoder}, decode duration`;
  console.time(timerLabel);
  await docxToTextDecoder(filePath, decoder, () => {
    console.timeEnd(timerLabel);
  });
};

decodeDocxAndExtractText();

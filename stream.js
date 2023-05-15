var fs = require("fs");
var data = "";

// creates the readable stream
var readerStream = fs.createReadStream("input.txt");

// sets the encoding to UTF8
readerStream.setEncoding("UTF8");

// handles the stream events
readerStream.on("data", function (text) {
  data += text;
});

readerStream.on("end", function () {
  console.log(data);
});

var data2 = "Goodbye World";

// create a writable stream
var writerStream = fs.createWriteStream("output.txt");

// write data to stream with encoding UTF8
writerStream.write(data2, "UTF8");

// mark the end of file
writerStream.end();

// handle stream events
writerStream.on("finish", function () {
  console.log(data2);
});

// exit: used to determine when a node program is completed.
process.on("exit", (code) => {
  console.log("Exited with status code: ", code);
});
console.log("Complete!");

// stdout: used to create a readable stream in the command line interface.
process.stdout.write("Have a good day!" + "\n");

// execPath gets the pathname of the executable
console.log(process.execPath);

// platform gets the platform you are running on
console.log(process.platform);

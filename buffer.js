// Buffer.alloc() creates a new buffer of any size.
var buf = Buffer.alloc(20);
console.log(buf);

// Buffer.write() writes a string to the bufffer.
const greet = buf.write("Hello World!");
console.log(greet);

// Buffer fill() creates a buffer, allocates its size, and fills it.
const buf2 = Buffer.alloc(15).fill("q");
console.log(buf2.toString());

// buff.includes checks whether an object contains specific values or not.
const buf3 = Buffer.from("Hello World!"); // Buffer.from() creates a new buffer
console.log(buf.includes("!"));

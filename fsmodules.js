const fs = require("fs");

console.log("Hello World Aneeq");
console.log("File System");


// This readdir is to read the directory of the file
fs.readdir("./", (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
});

// This readFile is to read the file what is written in the file
fs.readFile("./ReadMe.txt", "utf8", (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
});

// If you want that old thing not to be changed in your file (append)
fs.appendFile("./ReadMe.txt", "Some New Text From Aneeq", (err) => {
    if (err) {
      console.log(err);
    }
  });


// This Function Is to write in the file and erase old one written in the file
fs.writeFile("./ReadMe.txt", "Some New Text From Server.JS", (err) => {
  if (err) {
    console.log(err);
  }
});

// Provide String Number in Console In this function Node JS intetionally blocked 
const a = fs.readFileSync('ReadMe.txt')
console.log(a.toString())

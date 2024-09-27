const fs = require("fs");

// 1. membaca file surat cinta fsw 2
let loveLetter = fs.readFileSync("./index.txt", "utf-8");

// 2. proses print isi dari surat cinta
console.log(loveLetter);

// 3. membuat file baru untuk balas surat cinta
const loveAnswer = "aku juga sayang FSW 2 !!!";
fs.writeFileSync("./archive/balasan.txt", loveAnswer);

// INI ASYNC nya
// asynchronous file/write

// menimpa isi konten index.txt
fs.writeFileSync("index.txt", "apa yo?");

loveLetter = fs
  .readFile("./index.txt", "utf-8", () => {})
  .then((isiSuratCinta) => {
    loveLetter = isiSuratCinta;
  });

console.log("loveLetter", loveLetter);

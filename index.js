const fs = require('fs');
const http = require('http');

///////////////////////////////////////
// FILES

// Blocking, sync
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textInput);
// const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOutput);
// console.log('File written!');

// Non-blocking, async
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR!');
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     if (err) return console.log('ERROR!');
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       if (err) return console.log('ERROR!');  
//       console.log(data3);
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}` ,(err) => {
//         if (err) return console.log('ERROR!');
//         console.log('Your file has been written');
//       });
//     });
//   });
// });

///////////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
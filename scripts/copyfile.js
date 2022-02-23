const fs = require('fs'); 
// destination will be created or overwritten by default.
fs.copyFile('D:\testfolderA\testA.txt', 'D:\testfolderB\testA.txt', (err) => {
  if (err) throw err;
  console.log('File was copied to destination');
});
